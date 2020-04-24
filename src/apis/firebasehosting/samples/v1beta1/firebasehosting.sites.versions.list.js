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
const firebasehosting = google.firebasehosting('v1beta1');

/*
 * Lists the versions that have been created on the specified site.
 * Will include filtering in the future.
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
    scopes: [],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await firebasehosting.sites.versions.list({
    // The filter string used to return a subset of versions in the response. Currently supported fields for filtering are: name, status, and create_time. Filter processing will be implemented in accordance with go/filtering.
    filter: 'placeholder-value',
    // The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 25 versions will be returned. The maximum value is 100; values above 100 will be coerced to 100
    pageSize: 'placeholder-value',
    // The next_page_token from a previous request, if provided.
    pageToken: 'placeholder-value',
    // Required. The parent for which to list files, in the format: <code>sites/<var>site-name</var></code>
    parent: 'sites/[^/]+',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
