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
 * Creates a custom consumer key and secret for a developer app. This is
 * particularly useful if you want to migrate existing consumer keys and
 * secrets to Apigee hybrid from another system.
 *
 * Consumer keys and secrets can contain letters, numbers, underscores, and
 * hyphens. No other special characters are allowed.
 *
 * **Note**: To avoid service disruptions, a consumer key and secret
 * should not exceed 2 KBs each.
 *
 * After creating the consumer key and secret, associate the key with
 * an API product using the
 * UpdateDeveloperAppKey API.
 *
 * If a consumer key and secret already exist, you can keep them or
 * delete them using the
 * DeleteDeveloperAppKey API.
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
  const res = await apigee.organizations.developers.apps.keys.create.create({
    // Parent of the developer app key. Use the following structure in your request:   `organizations/{org}/developers/{developer_email}/apps`
    parent: 'organizations/[^/]+/developers/[^/]+/apps/[^/]+',

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
