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
import * as Mappers from "../models/enrollmentAccountsMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a EnrollmentAccounts. */
export class EnrollmentAccounts {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a EnrollmentAccounts.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the enrollment account by id.
   * @param billingAccountName billing Account Id.
   * @param enrollmentAccountName Enrollment Account Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnrollmentAccountsGetByEnrollmentAccountAccountIdResponse>
   */
  getByEnrollmentAccountAccountId(billingAccountName: string, enrollmentAccountName: string, options?: Models.EnrollmentAccountsGetByEnrollmentAccountAccountIdOptionalParams): Promise<Models.EnrollmentAccountsGetByEnrollmentAccountAccountIdResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param enrollmentAccountName Enrollment Account Id.
   * @param callback The callback
   */
  getByEnrollmentAccountAccountId(billingAccountName: string, enrollmentAccountName: string, callback: msRest.ServiceCallback<Models.EnrollmentAccount>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param enrollmentAccountName Enrollment Account Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  getByEnrollmentAccountAccountId(billingAccountName: string, enrollmentAccountName: string, options: Models.EnrollmentAccountsGetByEnrollmentAccountAccountIdOptionalParams, callback: msRest.ServiceCallback<Models.EnrollmentAccount>): void;
  getByEnrollmentAccountAccountId(billingAccountName: string, enrollmentAccountName: string, options?: Models.EnrollmentAccountsGetByEnrollmentAccountAccountIdOptionalParams | msRest.ServiceCallback<Models.EnrollmentAccount>, callback?: msRest.ServiceCallback<Models.EnrollmentAccount>): Promise<Models.EnrollmentAccountsGetByEnrollmentAccountAccountIdResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        enrollmentAccountName,
        options
      },
      getByEnrollmentAccountAccountIdOperationSpec,
      callback) as Promise<Models.EnrollmentAccountsGetByEnrollmentAccountAccountIdResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getByEnrollmentAccountAccountIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.enrollmentAccountName
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
      bodyMapper: Mappers.EnrollmentAccount
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
