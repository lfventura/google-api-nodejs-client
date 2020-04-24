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
 * Gets an API proxy revision.
 *
 * To download the API proxy configuration bundle for the specified revision
 * as a zip file, do the following:
 *
 *  * Set the `format` query parameter to `bundle`.
 *  * Set the `Accept` header to `application/zip`.
 *
 * If you are using curl, specify `-o filename.zip` to save the output to a
 * file; otherwise, it displays to `stdout`. Then, develop the API proxy
 * configuration locally and upload the updated API proxy configuration
 * revision, as described in
 * [updateApiProxyRevision](updateApiProxyRevision).
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
  const res = await apigee.organizations.apis.revisions.get({
    // Format used when downloading the API proxy configuration revision. Set to `bundle` to download the API proxy configuration revision as a zip file.
    format: 'placeholder-value',
    // Required. API proxy revision in the following format:   `organizations/{org}/apis/{api}/revisions/{rev}`
    name: 'organizations/[^/]+/apis/[^/]+/revisions/[^/]+',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
