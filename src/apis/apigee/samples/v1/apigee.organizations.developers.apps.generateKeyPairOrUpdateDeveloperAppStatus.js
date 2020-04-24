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
 * Manages access to a developer app by enabling you to:
 *
 * * Approve or revoke a developer app
 * * Generate a new consumer key and secret for a developer app
 *
 * To approve or revoke a developer app, set the `action` query parameter to
 * `approved` or `revoked`, respectively, and the
 * `Content-Type` header to `application/octet-stream`. If a developer app is
 * revoked, none of its API keys are valid for API calls even though
 * the keys are still `approved`. If successful, the API call returns the
 * following HTTP status code: `204 No Content`
 *
 * To generate a new consumer key and secret for a developer
 * app, pass the new key/secret details. Rather than
 * replace an existing key, this API generates a new
 * key. In this case, multiple key
 * pairs may be associated with a single developer app. Each key pair has an
 * independent status (`approved` or `revoked`) and expiration time.
 * Any approved, non-expired key can be used in an API call.
 *
 * For example, if you're using API key rotation, you can generate new
 * keys with expiration times that overlap keys that are going to expire.
 * You might also generate a new consumer key/secret if the security of the
 * original key/secret is compromised.
 *
 * The `keyExpiresIn` property defines the
 * expiration time for the API key in milliseconds. If you don't set
 * this property or set it to `-1`, the API key never expires.
 *
 * **Notes**:
 *
 * * When generating a new key/secret, this API replaces the
 * existing attributes, notes, and callback URLs with those specified in the
 * request. Include or exclude any existing information that you want to
 * retain or delete, respectively.
 * * To migrate existing consumer keys and secrets to hybrid from another
 * system, see the
 * CreateDeveloperAppKey API.
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
  const res = await apigee.organizations.developers.apps.generateKeyPairOrUpdateDeveloperAppStatus(
    {
      // Action. Valid values are `approve` or `revoke`.
      action: 'placeholder-value',
      // Required. Name of the developer app. Use the following structure in your request:   `organizations/{org}/developers/{developer_email}/apps/{app}`
      name: 'organizations/[^/]+/developers/[^/]+/apps/[^/]+',

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
