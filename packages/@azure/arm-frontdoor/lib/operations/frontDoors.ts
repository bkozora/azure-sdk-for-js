/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/frontDoorsMappers";
import * as Parameters from "../models/parameters";
import { FrontDoorManagementClientContext } from "../frontDoorManagementClientContext";

/** Class representing a FrontDoors. */
export class FrontDoors {
  private readonly client: FrontDoorManagementClientContext;

  /**
   * Create a FrontDoors.
   * @param {FrontDoorManagementClientContext} client Reference to the service client.
   */
  constructor(client: FrontDoorManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the Front Doors within an Azure subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.FrontDoorsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.FrontDoorsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.FrontDoorListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FrontDoorListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FrontDoorListResult>, callback?: msRest.ServiceCallback<Models.FrontDoorListResult>): Promise<Models.FrontDoorsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.FrontDoorsListResponse>;
  }

  /**
   * Lists all of the Front Doors within a resource group under a subscription.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.FrontDoorsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.FrontDoorsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.FrontDoorListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FrontDoorListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FrontDoorListResult>, callback?: msRest.ServiceCallback<Models.FrontDoorListResult>): Promise<Models.FrontDoorsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.FrontDoorsListByResourceGroupResponse>;
  }

  /**
   * Gets a Front Door with the specified Front Door name under the specified subscription and
   * resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param [options] The optional parameters
   * @returns Promise<Models.FrontDoorsGetResponse>
   */
  get(resourceGroupName: string, frontDoorName: string, options?: msRest.RequestOptionsBase): Promise<Models.FrontDoorsGetResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param callback The callback
   */
  get(resourceGroupName: string, frontDoorName: string, callback: msRest.ServiceCallback<Models.FrontDoor>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, frontDoorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FrontDoor>): void;
  get(resourceGroupName: string, frontDoorName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FrontDoor>, callback?: msRest.ServiceCallback<Models.FrontDoor>): Promise<Models.FrontDoorsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        frontDoorName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.FrontDoorsGetResponse>;
  }

  /**
   * Creates a new Front Door with a Front Door name under the specified subscription and resource
   * group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontDoorParameters Front Door properties needed to create a new Front Door.
   * @param [options] The optional parameters
   * @returns Promise<Models.FrontDoorsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, frontDoorName: string, frontDoorParameters: Models.FrontDoor, options?: msRest.RequestOptionsBase): Promise<Models.FrontDoorsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,frontDoorName,frontDoorParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.FrontDoorsCreateOrUpdateResponse>;
  }

  /**
   * Deletes an existing Front Door with the specified parameters.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, frontDoorName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,frontDoorName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Validates the custom domain mapping to ensure it maps to the correct Front Door endpoint in DNS.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param customDomainProperties Custom domain to be validated.
   * @param [options] The optional parameters
   * @returns Promise<Models.FrontDoorsValidateCustomDomainResponse>
   */
  validateCustomDomain(resourceGroupName: string, frontDoorName: string, customDomainProperties: Models.ValidateCustomDomainInput, options?: msRest.RequestOptionsBase): Promise<Models.FrontDoorsValidateCustomDomainResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param customDomainProperties Custom domain to be validated.
   * @param callback The callback
   */
  validateCustomDomain(resourceGroupName: string, frontDoorName: string, customDomainProperties: Models.ValidateCustomDomainInput, callback: msRest.ServiceCallback<Models.ValidateCustomDomainOutput>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param customDomainProperties Custom domain to be validated.
   * @param options The optional parameters
   * @param callback The callback
   */
  validateCustomDomain(resourceGroupName: string, frontDoorName: string, customDomainProperties: Models.ValidateCustomDomainInput, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ValidateCustomDomainOutput>): void;
  validateCustomDomain(resourceGroupName: string, frontDoorName: string, customDomainProperties: Models.ValidateCustomDomainInput, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ValidateCustomDomainOutput>, callback?: msRest.ServiceCallback<Models.ValidateCustomDomainOutput>): Promise<Models.FrontDoorsValidateCustomDomainResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        frontDoorName,
        customDomainProperties,
        options
      },
      validateCustomDomainOperationSpec,
      callback) as Promise<Models.FrontDoorsValidateCustomDomainResponse>;
  }

  /**
   * Creates a new Front Door with a Front Door name under the specified subscription and resource
   * group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontDoorParameters Front Door properties needed to create a new Front Door.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, frontDoorName: string, frontDoorParameters: Models.FrontDoor, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        frontDoorName,
        frontDoorParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes an existing Front Door with the specified parameters.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, frontDoorName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        frontDoorName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists all of the Front Doors within an Azure subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.FrontDoorsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.FrontDoorsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.FrontDoorListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FrontDoorListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FrontDoorListResult>, callback?: msRest.ServiceCallback<Models.FrontDoorListResult>): Promise<Models.FrontDoorsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.FrontDoorsListNextResponse>;
  }

  /**
   * Lists all of the Front Doors within a resource group under a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.FrontDoorsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.FrontDoorsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.FrontDoorListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FrontDoorListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FrontDoorListResult>, callback?: msRest.ServiceCallback<Models.FrontDoorListResult>): Promise<Models.FrontDoorsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.FrontDoorsListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/frontDoors",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FrontDoorListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FrontDoorListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.frontDoorName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FrontDoor
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const validateCustomDomainOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/validateCustomDomain",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.frontDoorName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "customDomainProperties",
    mapper: {
      ...Mappers.ValidateCustomDomainInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ValidateCustomDomainOutput
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.frontDoorName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "frontDoorParameters",
    mapper: {
      ...Mappers.FrontDoor,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.FrontDoor
    },
    201: {
      bodyMapper: Mappers.FrontDoor
    },
    202: {
      bodyMapper: Mappers.FrontDoor
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.frontDoorName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FrontDoorListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FrontDoorListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
