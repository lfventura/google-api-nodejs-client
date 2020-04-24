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
const translate = google.translate('v3beta1');

/*
 * Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't
 * exist.
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
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/cloud-translation',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await translate.projects.locations.glossaries.list({
    // Optional. Filter specifying constraints of a list operation. Filtering is not supported yet, and the parameter currently has no effect. If missing, no filtering is performed.
    filter: 'placeholder-value',
    // Optional. Requested page size. The server may return fewer glossaries than requested. If unspecified, the server picks an appropriate default.
    pageSize: 'placeholder-value',
    // Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossariesResponse.next_page_token] returned from the previous call to `ListGlossaries` method. The first page is returned if `page_token`is empty or missing.
    pageToken: 'placeholder-value',
    // Required. The name of the project from which to list all of the glossaries.
    parent: 'projects/my-project/locations/my-location',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
