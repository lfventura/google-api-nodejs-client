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
 * Adds an API product to a developer app key, enabling the app that holds
 * the key to access the API resources bundled in the API product.
 *
 * In addition, you can add
 * attributes to a developer app key. This API replaces the
 * existing attributes with those specified in the request.
 * Include or exclude any existing attributes that you want to retain or
 * delete, respectively.
 *
 * You can use the same key to access all API products
 * associated with the app.
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
  const res = await apigee.organizations.developers.apps.keys.updateDeveloperAppKey(
    {
      // Approve or revoke the consumer key by setting this value to `approve` or `revoke`, respectively.
      action: 'placeholder-value',
      // Name of the developer app key. Use the following structure in your request:   `organizations/{org}/developers/{developer_email}/apps/{app}/keys/{key}`
      name: 'organizations/[^/]+/developers/[^/]+/apps/[^/]+/keys/[^/]+',

      // Request body metadata
      requestBody: {
        // request body parameters
      },
    }
  );
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
