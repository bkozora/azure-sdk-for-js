/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing InfoField.
 * Key-value pairs of instance details in the legacy format.
 *
 */
export interface InfoField {
  /**
   * @member {string} [project] Identifies the name of the instance provisioned
   * by the user.
   */
  project?: string;
}

/**
 * @interface
 * An interface representing UsageSample.
 * Describes a sample of the usageAggregation.
 *
 */
export interface UsageSample {
  /**
   * @member {string} [subscriptionId] The subscription identifier for the
   * Azure user.
   */
  subscriptionId?: string;
  /**
   * @member {string} [meterId] Unique ID for the resource that was consumed
   * (aka ResourceID).
   */
  meterId?: string;
  /**
   * @member {Date} [usageStartTime] UTC start time for the usage bucket to
   * which this usage aggregate belongs.
   */
  usageStartTime?: Date;
  /**
   * @member {Date} [usageEndTime] UTC end time for the usage bucket to which
   * this usage aggregate belongs.
   */
  usageEndTime?: Date;
  /**
   * @member {number} [quantity] The amount of the resource consumption that
   * occurred in this time frame.
   */
  quantity?: number;
  /**
   * @member {string} [unit] The unit in which the usage for this resource is
   * being counted, e.g. Hours, GB.
   */
  unit?: string;
  /**
   * @member {string} [meterName] Friendly name of the resource being consumed.
   */
  meterName?: string;
  /**
   * @member {string} [meterCategory] Category of the consumed resource.
   */
  meterCategory?: string;
  /**
   * @member {string} [meterSubCategory] Sub-category of the consumed resource.
   */
  meterSubCategory?: string;
  /**
   * @member {string} [meterRegion] Region of the meterId used for billing
   * purposes
   */
  meterRegion?: string;
  /**
   * @member {InfoField} [infoFields] Key-value pairs of instance details
   * (legacy format).
   */
  infoFields?: InfoField;
  /**
   * @member {string} [instanceData] Key-value pairs of instance details
   * represented as a string.
   */
  instanceData?: string;
}

/**
 * @interface
 * An interface representing UsageAggregation.
 * Describes the usageAggregation.
 *
 */
export interface UsageAggregation {
  /**
   * @member {string} [id] Unique Id for the usage aggregate.
   */
  id?: string;
  /**
   * @member {string} [name] Name of the usage aggregate.
   */
  name?: string;
  /**
   * @member {string} [type] Type of the resource being returned.
   */
  type?: string;
  /**
   * @member {string} [subscriptionId] The subscription identifier for the
   * Azure user.
   */
  subscriptionId?: string;
  /**
   * @member {string} [meterId] Unique ID for the resource that was consumed
   * (aka ResourceID).
   */
  meterId?: string;
  /**
   * @member {Date} [usageStartTime] UTC start time for the usage bucket to
   * which this usage aggregate belongs.
   */
  usageStartTime?: Date;
  /**
   * @member {Date} [usageEndTime] UTC end time for the usage bucket to which
   * this usage aggregate belongs.
   */
  usageEndTime?: Date;
  /**
   * @member {number} [quantity] The amount of the resource consumption that
   * occurred in this time frame.
   */
  quantity?: number;
  /**
   * @member {string} [unit] The unit in which the usage for this resource is
   * being counted, e.g. Hours, GB.
   */
  unit?: string;
  /**
   * @member {string} [meterName] Friendly name of the resource being consumed.
   */
  meterName?: string;
  /**
   * @member {string} [meterCategory] Category of the consumed resource.
   */
  meterCategory?: string;
  /**
   * @member {string} [meterSubCategory] Sub-category of the consumed resource.
   */
  meterSubCategory?: string;
  /**
   * @member {string} [meterRegion] Region of the meterId used for billing
   * purposes
   */
  meterRegion?: string;
  /**
   * @member {InfoField} [infoFields] Key-value pairs of instance details
   * (legacy format).
   */
  infoFields?: InfoField;
  /**
   * @member {string} [instanceData] Key-value pairs of instance details
   * represented as a string.
   */
  instanceData?: string;
}

/**
 * @interface
 * An interface representing RateCardQueryParameters.
 * Parameters that are used in the odata $filter query parameter for providing
 * RateCard information.
 *
 */
export interface RateCardQueryParameters {
  /**
   * @member {string} offerDurableId The Offer ID parameter consists of the
   * 'MS-AZR-' prefix, plus the Offer ID number (e.g., MS-AZR-0026P). See
   * https://azure.microsoft.com/en-us/support/legal/offer-details/ for more
   * information on the list of available Offer IDs, country/region
   * availability, and billing currency.
   */
  offerDurableId: string;
  /**
   * @member {string} currency The currency in which the rates need to be
   * provided.
   */
  currency: string;
  /**
   * @member {string} locale The culture in which the resource metadata needs
   * to be localized.
   */
  locale: string;
  /**
   * @member {string} regionInfo 2 letter ISO code where the offer was
   * purchased.
   */
  regionInfo: string;
}

/**
 * Contains the possible cases for OfferTermInfo.
 */
export type OfferTermInfoUnion = OfferTermInfo | MonetaryCredit | MonetaryCommitment | RecurringCharge;

/**
 * @interface
 * An interface representing OfferTermInfo.
 * Describes the offer term.
 *
 */
export interface OfferTermInfo {
  /**
   * @member {string} name Polymorphic Discriminator
   */
  name: "OfferTermInfo";
  /**
   * @member {Date} [effectiveDate] Indicates the date from which the offer
   * term is effective.
   */
  effectiveDate?: Date;
}

/**
 * @interface
 * An interface representing MeterInfo.
 * Detailed information about the meter.
 *
 */
export interface MeterInfo {
  /**
   * @member {string} [meterId] The unique identifier of the resource.
   */
  meterId?: string;
  /**
   * @member {string} [meterName] The name of the meter, within the given meter
   * category
   */
  meterName?: string;
  /**
   * @member {string} [meterCategory] The category of the meter, e.g., 'Cloud
   * services', 'Networking', etc..
   */
  meterCategory?: string;
  /**
   * @member {string} [meterSubCategory] The subcategory of the meter, e.g.,
   * 'A6 Cloud services', 'ExpressRoute (IXP)', etc..
   */
  meterSubCategory?: string;
  /**
   * @member {string} [unit] The unit in which the meter consumption is
   * charged, e.g., 'Hours', 'GB', etc.
   */
  unit?: string;
  /**
   * @member {string[]} [meterTags] Provides additional meter data. 'Third
   * Party' indicates a meter with no discount. Blanks indicate First Party.
   */
  meterTags?: string[];
  /**
   * @member {string} [meterRegion] The region in which the Azure service is
   * available.
   */
  meterRegion?: string;
  /**
   * @member {{ [propertyName: string]: number }} [meterRates] The list of
   * key/value pairs for the meter rates, in the format 'key':'value' where key
   * = the meter quantity, and value = the corresponding price
   */
  meterRates?: { [propertyName: string]: number };
  /**
   * @member {Date} [effectiveDate] Indicates the date from which the meter
   * rate is effective.
   */
  effectiveDate?: Date;
  /**
   * @member {number} [includedQuantity] The resource quantity that is included
   * in the offer at no cost. Consumption beyond this quantity will be charged.
   */
  includedQuantity?: number;
}

/**
 * @interface
 * An interface representing ResourceRateCardInfo.
 * Price and Metadata information for resources
 *
 */
export interface ResourceRateCardInfo {
  /**
   * @member {string} [currency] The currency in which the rates are provided.
   */
  currency?: string;
  /**
   * @member {string} [locale] The culture in which the resource information is
   * localized.
   */
  locale?: string;
  /**
   * @member {boolean} [isTaxIncluded] All rates are pretax, so this will
   * always be returned as 'false'.
   */
  isTaxIncluded?: boolean;
  /**
   * @member {OfferTermInfoUnion[]} [offerTerms] A list of offer terms.
   */
  offerTerms?: OfferTermInfoUnion[];
  /**
   * @member {MeterInfo[]} [meters] A list of meters.
   */
  meters?: MeterInfo[];
}

/**
 * @interface
 * An interface representing MonetaryCredit.
 * Indicates that this is a monetary credit offer.
 *
 */
export interface MonetaryCredit {
  /**
   * @member {string} name Polymorphic Discriminator
   */
  name: "Monetary Credit";
  /**
   * @member {Date} [effectiveDate] Indicates the date from which the offer
   * term is effective.
   */
  effectiveDate?: Date;
  /**
   * @member {number} [credit] The amount of credit provided under the terms of
   * the given offer level.
   */
  credit?: number;
  /**
   * @member {string[]} [excludedMeterIds] An array of meter ids that are
   * excluded from the given offer terms.
   */
  excludedMeterIds?: string[];
}

/**
 * @interface
 * An interface representing MonetaryCommitment.
 * Indicates that a monetary commitment is required for this offer
 *
 */
export interface MonetaryCommitment {
  /**
   * @member {string} name Polymorphic Discriminator
   */
  name: "Monetary Commitment";
  /**
   * @member {Date} [effectiveDate] Indicates the date from which the offer
   * term is effective.
   */
  effectiveDate?: Date;
  /**
   * @member {{ [propertyName: string]: number }} [tieredDiscount] The list of
   * key/value pairs for the tiered meter rates, in the format 'key':'value'
   * where key = price, and value = the corresponding discount percentage. This
   * field is used only by offer terms of type 'Monetary Commitment'.
   */
  tieredDiscount?: { [propertyName: string]: number };
  /**
   * @member {string[]} [excludedMeterIds] An array of meter ids that are
   * excluded from the given offer terms.
   */
  excludedMeterIds?: string[];
}

/**
 * @interface
 * An interface representing RecurringCharge.
 * Indicates a recurring charge is present for this offer.
 *
 */
export interface RecurringCharge {
  /**
   * @member {string} name Polymorphic Discriminator
   */
  name: "Recurring Charge";
  /**
   * @member {Date} [effectiveDate] Indicates the date from which the offer
   * term is effective.
   */
  effectiveDate?: Date;
  /**
   * @member {number} [recurringCharge] The amount of recurring charge as per
   * the offer term.
   */
  recurringCharge?: number;
}

/**
 * @interface
 * An interface representing ErrorResponse.
 * Describes the format of Error response.
 *
 */
export interface ErrorResponse {
  /**
   * @member {string} [code] Error code
   */
  code?: string;
  /**
   * @member {string} [message] Error message indicating why the operation
   * failed.
   */
  message?: string;
}

/**
 * @interface
 * An interface representing UsageAggregatesListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface UsageAggregatesListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {boolean} [showDetails] `True` returns usage data in
   * instance-level detail, `false` causes server-side aggregation with fewer
   * details. For example, if you have 3 website instances, by default you will
   * get 3 line items for website consumption. If you specify showDetails =
   * false, the data will be aggregated as a single line item for website
   * consumption within the time period (for the given subscriptionId, meterId,
   * usageStartTime and usageEndTime).
   */
  showDetails?: boolean;
  /**
   * @member {AggregationGranularity} [aggregationGranularity] `Daily`
   * (default) returns the data in daily granularity, `Hourly` returns the data
   * in hourly granularity. Possible values include: 'Daily', 'Hourly'. Default
   * value: 'Daily' .
   */
  aggregationGranularity?: AggregationGranularity;
  /**
   * @member {string} [continuationToken] Used when a continuation token string
   * is provided in the response body of the previous call, enabling paging
   * through a large result set. If not present, the data is retrieved from the
   * beginning of the day/hour (based on the granularity) passed in.
   */
  continuationToken?: string;
}

/**
 * @interface
 * An interface representing UsageManagementClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface UsageManagementClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the UsageAggregationListResult.
 * The Get UsageAggregates operation response.
 *
 * @extends Array<UsageAggregation>
 */
export interface UsageAggregationListResult extends Array<UsageAggregation> {
  /**
   * @member {string} [nextLink] Gets or sets the link to the next set of
   * results.
   */
  nextLink?: string;
}

/**
 * Defines values for AggregationGranularity.
 * Possible values include: 'Daily', 'Hourly'
 * @readonly
 * @enum {string}
 */
export enum AggregationGranularity {
  Daily = 'Daily',
  Hourly = 'Hourly',
}

/**
 * Contains response data for the list operation.
 */
export type UsageAggregatesListResponse = UsageAggregationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: UsageAggregationListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type UsageAggregatesListNextResponse = UsageAggregationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: UsageAggregationListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type RateCardGetResponse = ResourceRateCardInfo & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ResourceRateCardInfo;
    };
};