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
 * Updates the details for a developer app. In addition, you can
 * add an API product to a developer app and automatically generate
 * an API key for the app to use when calling APIs in the API product.
 *
 * If you want to use an existing API key for the API product,
 * add the API product to the API key using the
 * UpdateDeveloperAppKey
 * API.
 *
 * Using this API, you cannot update the following:
 *
 * * App name as it is the primary key used to identify the app and cannot
 *   be changed.
 * * Scopes associated with the app. Instead, use the
 *   ReplaceDeveloperAppKey API.
 *
 * This API replaces the
 * existing attributes with those specified in the request.
 * Include or exclude any existing attributes that you want to retain or
 * delete, respectively.
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
  const res = await apigee.organizations.developers.apps.update({
    // Required. Name of the developer app. Use the following structure in your request:   `organizations/{org}/developers/{developer_email}/apps/{app}`
    name: 'organizations/[^/]+/developers/[^/]+/apps/[^/]+',

    // Request body metadata
    requestBody: {
      // request body parameters
    },
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
