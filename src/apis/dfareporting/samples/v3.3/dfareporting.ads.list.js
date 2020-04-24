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
 * Retrieves a list of ads, possibly filtered. This method supports paging.
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
  const res = await dfareporting.ads.list({
    // Select only active ads.
    active: 'placeholder-value',
    // Select only ads with this advertiser ID.
    advertiserId: 'placeholder-value',
    // Select only archived ads.
    archived: 'placeholder-value',
    // Select only ads with these audience segment IDs.
    audienceSegmentIds: 'placeholder-value',
    // Select only ads with these campaign IDs.
    campaignIds: 'placeholder-value',
    // Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.
    compatibility: 'placeholder-value',
    // Select only ads with these creative IDs assigned.
    creativeIds: 'placeholder-value',
    // Select only ads with these creative optimization configuration IDs.
    creativeOptimizationConfigurationIds: 'placeholder-value',
    // Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both.
    dynamicClickTracker: 'placeholder-value',
    // Select only ads with these IDs.
    ids: 'placeholder-value',
    // Select only ads with these landing page IDs.
    landingPageIds: 'placeholder-value',
    // Maximum number of results to return.
    maxResults: 'placeholder-value',
    // Select only ads with this event tag override ID.
    overriddenEventTagId: 'placeholder-value',
    // Value of the nextPageToken from the previous result page.
    pageToken: 'placeholder-value',
    // Select only ads with these placement IDs assigned.
    placementIds: 'placeholder-value',
    // User profile ID associated with this request.
    profileId: 'placeholder-value',
    // Select only ads whose list targeting expression use these remarketing list IDs.
    remarketingListIds: 'placeholder-value',
    // Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "ad*2015" will return objects with names like "ad June 2015", "ad April 2015", or simply "ad 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "ad" will match objects with name "my ad", "ad 2015", or simply "ad".
    searchString: 'placeholder-value',
    // Select only ads with these size IDs.
    sizeIds: 'placeholder-value',
    // Field by which to sort the list.
    sortField: 'placeholder-value',
    // Order of sorted results.
    sortOrder: 'placeholder-value',
    // Select only ads that are SSL-compliant.
    sslCompliant: 'placeholder-value',
    // Select only ads that require SSL.
    sslRequired: 'placeholder-value',
    // Select only ads with these types.
    type: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
