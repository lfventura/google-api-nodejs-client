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
 * Updates developer attributes.
 *
 * This API replaces the
 * existing attributes with those specified in the request.
 * Add new attributes, and include or exclude any existing
 * attributes that you want to retain or
 * remove, respectively.
 *
 * The custom attribute limit is 18.
 *
 * **Note**: OAuth access tokens and Key Management Service (KMS) entities
 * (apps, developers, and API products) are cached for 180 seconds
 * (default). Any custom attributes associated with these entities
 * are cached for at least 180 seconds after the entity is accessed at
 * runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy
 * won't be able to expire an access token in less than 180 seconds.
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
  const res = await apigee.organizations.developers.attributes({
    // Required. Email address of the developer for which attributes are being updated in the following format:   `organizations/{org}/developers/{developer_email}`
    parent: 'organizations/[^/]+/developers/[^/]+',

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
