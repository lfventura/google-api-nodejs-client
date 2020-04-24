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
 * Creates an API proxy.
 * The API proxy created will not be accessible at runtime until it is
 * deployed to an environment.
 *
 * Create a new API proxy by setting the `name` query parameter to the
 * name of the API proxy.
 *
 * Import an API proxy configuration bundle stored in zip format
 * on your local machine to your organization by doing the following:
 *
 * * Set the `name` query parameter to the name of the API proxy.
 * * Set the `action` query parameter to `import`.
 * * Set the `Content-Type` header to `multipart/form-data`.
 * * Pass as a file the name of API proxy
 *   configuration bundle stored in zip format on your local machine using
 *   the `file` form field.
 *
 * **Note**: To validate the API proxy configuration bundle only
 *   without importing it, set the `action` query
 *   parameter to `validate`.
 *
 * When importing an API proxy configuration bundle, if the API proxy
 * does not exist, it will be created.
 * If the API proxy exists, then a new revision is created. Invalid API
 * proxy configurations are rejected, and a list of validation errors is
 * returned to the client.
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
  const res = await apigee.organizations.apis.create({
    // Action to perform when importing an API proxy configuration bundle. Set this parameter to one of the following values:  * `import` to import the API proxy configuration bundle. * `validate` to validate the API proxy configuration bundle without    importing it.
    action: 'placeholder-value',
    // Name of the API proxy. Restrict the characters used to: A-Za-z0-9._-
    name: 'placeholder-value',
    // Required. Name of the organization in the following format:   `organizations/{org}`
    parent: 'organizations/[^/]+',
    // Ignored. All uploads are validated regardless of the value of this field. Maintained for compatibility with Apigee Edge API.
    validate: 'placeholder-value',

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
