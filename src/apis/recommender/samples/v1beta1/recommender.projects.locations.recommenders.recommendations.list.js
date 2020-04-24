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
const recommender = google.recommender('v1beta1');

/*
 * Lists recommendations for a Cloud project. Requires the recommender.*.list
 * IAM permission for the specified recommender.
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
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await recommender.projects.locations.recommenders.recommendations.list(
    {
      // Filter expression to restrict the recommendations returned. Supported filter fields: state_info.state Eg: `state_info.state:"DISMISSED" or state_info.state:"FAILED"
      filter: 'placeholder-value',
      // Optional. The maximum number of results to return from this request.  Non-positive values are ignored. If not specified, the server will determine the number of results to return.
      pageSize: 'placeholder-value',
      // Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters must be identical to those in the previous call.
      pageToken: 'placeholder-value',
      // Required. The container resource on which to execute the request. Acceptable formats:  1. "projects/[PROJECT_NUMBER]/locations/[LOCATION]/recommenders/[RECOMMENDER_ID]",  LOCATION here refers to GCP Locations: https://cloud.google.com/about/locations/
      parent: 'projects/my-project/locations/my-location/recommenders/[^/]+',
    }
  );
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
