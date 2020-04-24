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
const admin = google.admin('directory_v1');

/*
 * Retrieve all Mobile Devices of a customer (paginated)
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
      'https://www.googleapis.com/auth/admin.directory.device.mobile',
      'https://www.googleapis.com/auth/admin.directory.device.mobile.action',
      'https://www.googleapis.com/auth/admin.directory.device.mobile.readonly',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await directory.mobiledevices.list({
    // Immutable ID of the G Suite account
    customerId: 'placeholder-value',
    // Maximum number of results to return. Max allowed value is 100.
    maxResults: 'placeholder-value',
    // Column to use for sorting results
    orderBy: 'placeholder-value',
    // Token to specify next page in the list
    pageToken: 'placeholder-value',
    // Restrict information returned to a set of selected fields.
    projection: 'placeholder-value',
    // Search string in the format given at http://support.google.com/a/bin/answer.py?answer=1408863#search
    query: 'placeholder-value',
    // Whether to return results in ascending or descending order. Only of use when orderBy is also used
    sortOrder: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
