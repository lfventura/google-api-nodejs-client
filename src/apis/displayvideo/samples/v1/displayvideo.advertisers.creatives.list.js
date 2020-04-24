// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*! THIS FILE IS AUTO-GENERATED */

const {google} = require('googleapis');
const displayvideo = google.displayvideo('v1');

/*
 * Lists creatives in an advertiser.
 *
 * The order is defined by the order_by
 * parameter.
 * If a filter by
 * entity_status is not specified, creatives with
 * `ENTITY_STATUS_ARCHIVED` will not be included in the results.
 */

async function main() {
  // By default, this method will look for, in order:
  // 1. An environment variable set to `GOOGLE_APPLICATION_CREDENTIALS`
  //    pointing to a service account credential file
  // 2. A GCE metadata server, present in Google Cloud products like
  //    Compute Engine, Kubernetes Engine, Cloud Run, etc
  // 3. A local OAuth token written by the Cloud SDK, obtained by running
  //    `gcloud auth application-default login`.  This is preferred for local
  //    development.
  const auth = new google.auth.GoogleAuth({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: ['https://www.googleapis.com/auth/display-video'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await displayvideo.advertisers.creatives.list({
    // Required. The ID of the advertiser to list creatives for.
    advertiserId: '[^/]+',
    // Allows filtering by creative properties.  Supported syntax:  * Filter expressions are made up of one or more restrictions. * Restriction for the same field must be combined by `OR`. * Restriction for different fields must be combined by `AND`. * Between `(` and `)` there can only be restrictions combined by `OR` for the same field. * A restriction has the form of `{field} {operator} {value}`. * The operator must be `EQUALS (=)`. * Supported fields:     - `entityStatus`     - `creativeType`.     - `dimensions`     - `minDuration`     - `maxDuration`     - `approvalStatus`     - `exchangeReviewStatus`     - `dynamic` * For `entityStatus`, `minDuration`, `maxDuration`, and `dynamic` there may be at most one restriction. * For `dimensions`, the value is in the form of `"{width}x{height}"`. * For `exchangeReviewStatus`, the value is in the form of `{exchange}-{reviewStatus}`. * For `minDuration` and `maxDuration`, the value is in the form of `"{duration}s"`. Only seconds are supported with millisecond granularity.  Examples:  * All native creatives: `creativeType="CREATIVE_TYPE_NATIVE"` * All active creatives with 300x400 or 50x100 dimensions: `entityStatus="ENTITY_STATUS_ACTIVE" AND (dimensions="300x400" OR dimensions="50x100")` * All dynamic creatives that are approved by AdX or AppNexus, with a minimum duration of 5 seconds and 200ms. `dynamic="true" AND minDuration="5.2s" AND (exchangeReviewStatus="EXCHANGE_GOOGLE_AD_MANAGER-REVIEW_STATUS_APPROVED" OR exchangeReviewStatus="EXCHANGE_APPNEXUS-REVIEW_STATUS_APPROVED")`  The length of this field should be no more than 500 characters.
    filter: 'placeholder-value',
    // Field by which to sort the list. Acceptable values are:  * `creativeId` (default) * `createTime` * `mediaDuration` * `dimensions` (sorts by width first, then by height)  The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `createTime desc`.
    orderBy: 'placeholder-value',
    // Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified.
    pageSize: 'placeholder-value',
    // A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCreatives` method. If not specified, the first page of results will be returned.
    pageToken: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
