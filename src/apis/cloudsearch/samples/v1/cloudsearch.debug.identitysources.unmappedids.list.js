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
const cloudsearch = google.cloudsearch('v1');

/*
 * Lists unmapped user identities for an identity source.
 *
 * **Note:** This API requires an admin account to execute.
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
    scopes: [
      'https://www.googleapis.com/auth/cloud_search',
      'https://www.googleapis.com/auth/cloud_search.debug',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await cloudsearch.debug.identitysources.unmappedids.list({
    // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
    'debugOptions.enableDebugging': 'placeholder-value',
    // Maximum number of items to fetch in a request. Defaults to 100.
    pageSize: 'placeholder-value',
    // The next_page_token value returned from a previous List request, if any.
    pageToken: 'placeholder-value',
    // The name of the identity source, in the following format: identitysources/{source_id}
    parent: 'identitysources/[^/]+',
    // Limit users selection to this status.
    resolutionStatusCode: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
