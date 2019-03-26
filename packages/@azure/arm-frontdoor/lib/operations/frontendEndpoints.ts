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
import * as Mappers from "../models/frontendEndpointsMappers";
import * as Parameters from "../models/parameters";
import { FrontDoorManagementClientContext } from "../frontDoorManagementClientContext";

/** Class representing a FrontendEndpoints. */
export class FrontendEndpoints {
  private readonly client: FrontDoorManagementClientContext;

  /**
   * Create a FrontendEndpoints.
   * @param {FrontDoorManagementClientContext} client Reference to the service client.
   */
  constructor(client: FrontDoorManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the frontend endpoints within a Front Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param [options] The optional parameters
   * @returns Promise<Models.FrontendEndpointsListByFrontDoorResponse>
   */
  listByFrontDoor(resourceGroupName: string, frontDoorName: string, options?: msRest.RequestOptionsBase): Promise<Models.FrontendEndpointsListByFrontDoorResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param callback The callback
   */
  listByFrontDoor(resourceGroupName: string, frontDoorName: string, callback: msRest.ServiceCallback<Models.FrontendEndpointsListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByFrontDoor(resourceGroupName: string, frontDoorName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FrontendEndpointsListResult>): void;
  listByFrontDoor(resourceGroupName: string, frontDoorName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FrontendEndpointsListResult>, callback?: msRest.ServiceCallback<Models.FrontendEndpointsListResult>): Promise<Models.FrontendEndpointsListByFrontDoorResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        frontDoorName,
        options
      },
      listByFrontDoorOperationSpec,
      callback) as Promise<Models.FrontendEndpointsListByFrontDoorResponse>;
  }

  /**
   * Gets a Frontend endpoint with the specified name within the specified Front Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param [options] The optional parameters
   * @returns Promise<Models.FrontendEndpointsGetResponse>
   */
  get(resourceGroupName: string, frontDoorName: string, frontendEndpointName: string, options?: msRest.RequestOptionsBase): Promise<Models.FrontendEndpointsGetResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param callback The callback
   */
  get(resourceGroupName: string, frontDoorName: string, frontendEndpointName: string, callback: msRest.ServiceCallback<Models.FrontendEndpoint>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, frontDoorName: string, frontendEndpointName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FrontendEndpoint>): void;
  get(resourceGroupName: string, frontDoorName: string, frontendEndpointName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FrontendEndpoint>, callback?: msRest.ServiceCallback<Models.FrontendEndpoint>): Promise<Models.FrontendEndpointsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        frontDoorName,
        frontendEndpointName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.FrontendEndpointsGetResponse>;
  }

  /**
   * Creates a new frontend endpoint with the specified host name within the specified Front Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param frontendEndpointParameters Frontend endpoint properties needed to create a new endpoint.
   * @param [options] The optional parameters
   * @returns Promise<Models.FrontendEndpointsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, frontDoorName: string, frontendEndpointName: string, frontendEndpointParameters: Models.FrontendEndpoint, options?: msRest.RequestOptionsBase): Promise<Models.FrontendEndpointsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,frontDoorName,frontendEndpointName,frontendEndpointParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.FrontendEndpointsCreateOrUpdateResponse>;
  }

  /**
   * Deletes an existing frontend endpoint with the specified parameters.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, frontDoorName: string, frontendEndpointName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,frontDoorName,frontendEndpointName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Enables a frontendEndpoint for HTTPS traffic
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param customHttpsConfiguration The configuration specifying how to enable HTTPS
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  enableHttps(resourceGroupName: string, frontDoorName: string, frontendEndpointName: string, customHttpsConfiguration: Models.CustomHttpsConfiguration, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginEnableHttps(resourceGroupName,frontDoorName,frontendEndpointName,customHttpsConfiguration,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Disables a frontendEndpoint for HTTPS traffic
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  disableHttps(resourceGroupName: string, frontDoorName: string, frontendEndpointName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDisableHttps(resourceGroupName,frontDoorName,frontendEndpointName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates a new frontend endpoint with the specified host name within the specified Front Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param frontendEndpointParameters Frontend endpoint properties needed to create a new endpoint.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, frontDoorName: string, frontendEndpointName: string, frontendEndpointParameters: Models.FrontendEndpoint, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        frontDoorName,
        frontendEndpointName,
        frontendEndpointParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes an existing frontend endpoint with the specified parameters.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, frontDoorName: string, frontendEndpointName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        frontDoorName,
        frontendEndpointName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Enables a frontendEndpoint for HTTPS traffic
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param customHttpsConfiguration The configuration specifying how to enable HTTPS
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginEnableHttps(resourceGroupName: string, frontDoorName: string, frontendEndpointName: string, customHttpsConfiguration: Models.CustomHttpsConfiguration, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        frontDoorName,
        frontendEndpointName,
        customHttpsConfiguration,
        options
      },
      beginEnableHttpsOperationSpec,
      options);
  }

  /**
   * Disables a frontendEndpoint for HTTPS traffic
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDisableHttps(resourceGroupName: string, frontDoorName: string, frontendEndpointName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        frontDoorName,
        frontendEndpointName,
        options
      },
      beginDisableHttpsOperationSpec,
      options);
  }

  /**
   * Lists all of the frontend endpoints within a Front Door.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.FrontendEndpointsListByFrontDoorNextResponse>
   */
  listByFrontDoorNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.FrontendEndpointsListByFrontDoorNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByFrontDoorNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.FrontendEndpointsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByFrontDoorNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FrontendEndpointsListResult>): void;
  listByFrontDoorNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FrontendEndpointsListResult>, callback?: msRest.ServiceCallback<Models.FrontendEndpointsListResult>): Promise<Models.FrontendEndpointsListByFrontDoorNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByFrontDoorNextOperationSpec,
      callback) as Promise<Models.FrontendEndpointsListByFrontDoorNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByFrontDoorOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/frontendEndpoints",
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
      bodyMapper: Mappers.FrontendEndpointsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/frontendEndpoints/{frontendEndpointName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.frontDoorName,
    Parameters.frontendEndpointName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FrontendEndpoint
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/frontendEndpoints/{frontendEndpointName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.frontDoorName,
    Parameters.frontendEndpointName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "frontendEndpointParameters",
    mapper: {
      ...Mappers.FrontendEndpoint,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.FrontendEndpoint
    },
    201: {
      bodyMapper: Mappers.FrontendEndpoint
    },
    202: {
      bodyMapper: Mappers.FrontendEndpoint
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/frontendEndpoints/{frontendEndpointName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.frontDoorName,
    Parameters.frontendEndpointName
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

const beginEnableHttpsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/frontendEndpoints/{frontendEndpointName}/enableHttps",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.frontDoorName,
    Parameters.frontendEndpointName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "customHttpsConfiguration",
    mapper: {
      ...Mappers.CustomHttpsConfiguration,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDisableHttpsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/frontendEndpoints/{frontendEndpointName}/disableHttps",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.frontDoorName,
    Parameters.frontendEndpointName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByFrontDoorNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.FrontendEndpointsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
