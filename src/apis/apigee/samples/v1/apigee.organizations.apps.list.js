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
const apigee = google.apigee('v1');

/*
 * Lists IDs of apps within an organization that have the specified app status
 * (approved or revoked) or are of the specified app type
 * (developer or company).
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
  const res = await apigee.organizations.apps.list({
    // API product.
    apiProduct: 'placeholder-value',
    // Optional. Filter by the type of the app. Valid values are `company` or `developer`. Defaults to `developer`.
    apptype: 'placeholder-value',
    // Optional. Flag that specifies whether to return an expanded list of apps for the organization. Defaults to `false`.
    expand: 'placeholder-value',
    // Optional. Comma-separated list of app IDs on which to filter.
    ids: 'placeholder-value',
    // Optional. Flag that specifies whether to include credentials in the response.
    includeCred: 'placeholder-value',
    // Optional. Key status of the app. Valid values include `approved` or `revoked`. Defaults to `approved`.
    keyStatus: 'placeholder-value',
    // Required. Resource path of the parent in the following format:  `organizations/{org}`
    parent: 'organizations/[^/]+',
    // Optional. Maximum number of app IDs to return. Defaults to 10000.
    rows: 'placeholder-value',
    // Returns the list of apps starting from the specified app ID.
    startKey: 'placeholder-value',
    // Optional. Filter by the status of the app. Valid values are `approved` or `revoked`. Defaults to `approved`.
    status: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
