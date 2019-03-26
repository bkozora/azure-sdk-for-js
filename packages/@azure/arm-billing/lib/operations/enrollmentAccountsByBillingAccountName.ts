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
import * as Models from "../models";
import * as Mappers from "../models/enrollmentAccountsByBillingAccountNameMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a EnrollmentAccountsByBillingAccountName. */
export class EnrollmentAccountsByBillingAccountName {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a EnrollmentAccountsByBillingAccountName.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all Enrollment Accounts for a user which he has access to.
   * @param billingAccountName billing Account Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnrollmentAccountsByBillingAccountNameListResponse>
   */
  list(billingAccountName: string, options?: Models.EnrollmentAccountsByBillingAccountNameListOptionalParams): Promise<Models.EnrollmentAccountsByBillingAccountNameListResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param callback The callback
   */
  list(billingAccountName: string, callback: msRest.ServiceCallback<Models.EnrollmentAccountListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(billingAccountName: string, options: Models.EnrollmentAccountsByBillingAccountNameListOptionalParams, callback: msRest.ServiceCallback<Models.EnrollmentAccountListResult>): void;
  list(billingAccountName: string, options?: Models.EnrollmentAccountsByBillingAccountNameListOptionalParams | msRest.ServiceCallback<Models.EnrollmentAccountListResult>, callback?: msRest.ServiceCallback<Models.EnrollmentAccountListResult>): Promise<Models.EnrollmentAccountsByBillingAccountNameListResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.EnrollmentAccountsByBillingAccountNameListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EnrollmentAccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
