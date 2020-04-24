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
const dfareporting = google.dfareporting('v3.3');

/*
 * Retrieves a list of placements, possibly filtered. This method supports paging.
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
    scopes: ['https://www.googleapis.com/auth/dfatrafficking'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await dfareporting.placements.list({
    // Select only placements that belong to these advertisers.
    advertiserIds: 'placeholder-value',
    // Select only archived placements. Don't set this field to select both archived and non-archived placements.
    archived: 'placeholder-value',
    // Select only placements that belong to these campaigns.
    campaignIds: 'placeholder-value',
    // Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
    compatibilities: 'placeholder-value',
    // Select only placements that are associated with these content categories.
    contentCategoryIds: 'placeholder-value',
    // Select only placements that are associated with these directory sites.
    directorySiteIds: 'placeholder-value',
    // Select only placements that belong to these placement groups.
    groupIds: 'placeholder-value',
    // Select only placements with these IDs.
    ids: 'placeholder-value',
    // Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
    maxEndDate: 'placeholder-value',
    // Maximum number of results to return.
    maxResults: 'placeholder-value',
    // Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
    maxStartDate: 'placeholder-value',
    // Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
    minEndDate: 'placeholder-value',
    // Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
    minStartDate: 'placeholder-value',
    // Value of the nextPageToken from the previous result page.
    pageToken: 'placeholder-value',
    // Select only placements with this payment source.
    paymentSource: 'placeholder-value',
    // Select only placements that are associated with these placement strategies.
    placementStrategyIds: 'placeholder-value',
    // Select only placements with these pricing types.
    pricingTypes: 'placeholder-value',
    // User profile ID associated with this request.
    profileId: 'placeholder-value',
    // Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement".
    searchString: 'placeholder-value',
    // Select only placements that are associated with these sites.
    siteIds: 'placeholder-value',
    // Select only placements that are associated with these sizes.
    sizeIds: 'placeholder-value',
    // Field by which to sort the list.
    sortField: 'placeholder-value',
    // Order of sorted results.
    sortOrder: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
