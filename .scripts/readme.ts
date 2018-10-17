/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 */

import { getLogger } from "./logger";
import { pathExists, startsWith } from "./common";
import { promises as fs } from "fs";
import * as glob from "glob";
import * as path from "path";
import * as yaml from "js-yaml";
import { SdkType } from "./commandLine";

const _logger = getLogger();

interface ReadmeSettings {
    "nodejs": {
        "azure-arm": boolean;
        "license-header": string;
        "payload-flattening-threshold": number;
        "package-name": string;
        "output-folder": string;
        "generate-license-txt": boolean | undefined;
        "generate-package-json": boolean | undefined;
        "generate-readme-md": boolean | undefined;
        "generate-metadata": boolean | undefined;
    } | undefined;
}

export async function getYamlSection(buffer: Buffer, sectionBeginning: string, sectionEnd: string): Promise<Buffer> {
    const beginningIndex = buffer.indexOf(sectionBeginning);
    const trimmedBuffer = buffer.slice(beginningIndex + (sectionBeginning.length));

    const endIndex = trimmedBuffer.indexOf(sectionEnd, 3);
    const sectionBuffer = trimmedBuffer.slice(0, endIndex);

    return sectionBuffer;
}

export async function doesReadmeMdFileSpecifiesTypescriptSdk(readmeMdPath: string): Promise<boolean> {
    const readmeMdBuffer = await fs.readFile(readmeMdPath);
    const sectionBuffer = await getYamlSection(readmeMdBuffer, "``` yaml $(swagger-to-sdk)", "```");

    if (sectionBuffer.includes("azure-sdk-for-js")) {
        return true;
    }

    return false;
}

export async function copyExistingNodeJsReadme(sdkPath: string): Promise<string> {
    const nodeJsReadmePath = path.resolve(sdkPath, "readme.nodejs.md");
    if (!(await pathExists(nodeJsReadmePath))) {
        return Promise.reject(`${nodeJsReadmePath} doesn't exists`)
    }

    const typescriptReadmePath = path.resolve(sdkPath, "readme.typescript.md");
    _logger.logDebug(`Copying ${nodeJsReadmePath} to ${typescriptReadmePath}`)

    if (await pathExists(typescriptReadmePath)) {
        return Promise.reject(`${typescriptReadmePath} file already exists`)
    }

    await fs.copyFile(nodeJsReadmePath, typescriptReadmePath);
    return typescriptReadmePath;
}

export async function getSinglePackageName(typescriptReadmePath: string): Promise<string> {
    const readmeBuffer: Buffer = await fs.readFile(typescriptReadmePath);
    const yamlSectionBuffer = await getYamlSection(readmeBuffer, "``` yaml $(typescript)", "```");
    const yamlSectionText = yamlSectionBuffer.toString();
    const yamlSection = yaml.safeLoad(yamlSectionText);
    return yamlSection["typescript"]["package-name"];
}

async function updatePackageName(settings: ReadmeSettings, sdkType: SdkType): Promise<ReadmeSettings> {
    let packageName = settings.nodejs["package-name"]
    if (packageName.startsWith("azure-")) {
        packageName = packageName.replace("azure-", "");
    }

    if (sdkType == SdkType.ResourceManager && !packageName.startsWith("arm-")) {
        packageName = `arm-${packageName}`
    }

    settings.nodejs["package-name"] = `"@azure/${packageName}"`
    return settings;
}

async function updateMetadataFields(settings: ReadmeSettings): Promise<ReadmeSettings> {
    settings.nodejs["generate-metadata"] = true;
    delete settings.nodejs["generate-license-txt"]
    delete settings.nodejs["generate-package-json"]
    delete settings.nodejs["generate-readme-md"];

    return settings;
}

function stripExtraQuotes(text: string): string {
    return text.replace(/'/g, "");
}

async function updateOutputFolder(settings: ReadmeSettings): Promise<ReadmeSettings> {
    const outputName = settings.nodejs["package-name"].replace(/"/g, "");
    settings.nodejs["output-folder"] = `"$(typescript-sdks-folder)/packages/${outputName}"`;
    return settings;
}

async function updateYamlSection(sectionText: string, sdkType: SdkType): Promise<string> {
    const section = yaml.safeLoad(sectionText);
    await updatePackageName(section, sdkType);
    await updateMetadataFields(section);
    await updateOutputFolder(section);
    section["typescript"] = section.nodejs;
    delete section.nodejs;

    return yaml.safeDump(section).trim();
}

export async function updateTypeScriptReadmeFile(typescriptReadmePath: string, sdkType: SdkType): Promise<string> {
    const readmeBuffer: Buffer = await fs.readFile(typescriptReadmePath);
    let outputReadme: string = readmeBuffer.toString();

    const yamlSection = await getYamlSection(readmeBuffer, "``` yaml $(nodejs)", "```");
    const sectionText = yamlSection.toString().trim();
    let updatedYamlSection = await updateYamlSection(sectionText, sdkType);
    updatedYamlSection = stripExtraQuotes(updatedYamlSection);

    outputReadme = outputReadme.replace(sectionText, updatedYamlSection);
    outputReadme = outputReadme.replace("azure-sdk-for-node", "azure-sdk-for-js");
    outputReadme = outputReadme.replace("Node.js", "TypeScript");
    outputReadme = outputReadme.replace("$(nodejs)", "$(typescript)");
    outputReadme = outputReadme.replace("nodejs", "typescript");
    outputReadme = outputReadme.replace("Node", "TypeScript");
    outputReadme = outputReadme.replace("node", "typescript");

    return outputReadme;
}

export async function updateMainReadmeFile(readmeFilePath: string) {
    const readmeBuffer: Buffer = await fs.readFile(readmeFilePath);
    let outputReadme: string = readmeBuffer.toString();

    const yamlSection = await getYamlSection(readmeBuffer, "``` yaml $(swagger-to-sdk)", "```");
    const sectionText = yamlSection.toString().trim();

    let lines = sectionText.split("\r\n");
    let nodeLineIndex = lines.findIndex(el => el.includes("- repo: azure-sdk-for-node"));

    if (nodeLineIndex == -1) {
        lines.push("  - repo: azure-sdk-for-node");
        nodeLineIndex = lines.length - 1;
    }

    const nodeLine = lines[nodeLineIndex];
    lines.splice(nodeLineIndex, 0, nodeLine.replace("node", "js"));
    const updatedYamlSection = lines.join("\r\n");

    outputReadme = outputReadme.replace(sectionText, updatedYamlSection);
    return outputReadme;
}

export function getPackageNamesFromReadmeTypeScriptMdFileContents(readmeTypeScriptMdFileContents: string): string[] {
    const packageNamePattern: RegExp = /package-name: (\S*)/g;
    const matches: string[] = readmeTypeScriptMdFileContents.match(packageNamePattern) || [];
    _logger.logDebug(`"package-name" matches: ${JSON.stringify(matches)}`.debug);

    for (let i = 0; i < matches.length; ++i) {
        matches[i] = matches[i].substring("package-name: ".length);
    }

    _logger.logDebug(`"package-name" matches trimmed: ${JSON.stringify(matches)}`.debug);
    return matches;
}

export function findReadmeTypeScriptMdFilePaths(azureRestAPISpecsRoot: string): string[] {
    _logger.logDebug(`Looking for "readme.typescript.md" files in "${azureRestAPISpecsRoot}"...`.debug);

    const specificationFolderPath: string = path.resolve(azureRestAPISpecsRoot, 'specification');
    const readmeTypeScriptMdFilePaths: string[] = glob.sync('**/readme.typescript.md', { absolute: true, cwd: specificationFolderPath });
    if (readmeTypeScriptMdFilePaths) {
        for (let i = 0; i < readmeTypeScriptMdFilePaths.length; ++i) {
            const readmeTypeScriptMdFilePath: string = readmeTypeScriptMdFilePaths[i];
            _logger.logDebug(`  Found "${readmeTypeScriptMdFilePath}".`.debug);

            if (readmeTypeScriptMdFilePath && !startsWith(readmeTypeScriptMdFilePath, specificationFolderPath)) {
                const resolvedReadmeTypeScriptMdFilePath: string = path.resolve(specificationFolderPath, readmeTypeScriptMdFilePath);
                _logger.logDebug(`    Updating to "${resolvedReadmeTypeScriptMdFilePath}".`.debug);
                readmeTypeScriptMdFilePaths[i] = resolvedReadmeTypeScriptMdFilePath;
            }
        }
    }
    return readmeTypeScriptMdFilePaths;
}

export function getOutputFolderFromReadmeTypeScriptMdFileContents(readmeTypeScriptMdFileContents: string): string {
    return readmeTypeScriptMdFileContents.match(/output-folder: (\S*)/)[1];
}

export function getAbsolutePackageFolderPathFromReadmeFileContents(azureSDKForJSRepoRoot: string, typeScriptReadmeFileContents: string): string {
    const outputFolderPath: string = getOutputFolderFromReadmeTypeScriptMdFileContents(typeScriptReadmeFileContents);
    const outputFolderPathRelativeToAzureSDKForJSRepoRoot: string = outputFolderPath.substring('$(typescript-sdks-folder)/'.length + 1, outputFolderPath.length - 1);
    return path.resolve(azureSDKForJSRepoRoot, outputFolderPathRelativeToAzureSDKForJSRepoRoot);
}