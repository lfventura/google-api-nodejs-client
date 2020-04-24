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
const sheets = google.sheets('v4');

/*
 * Applies one or more updates to the spreadsheet.
 *
 * Each request is validated before
 * being applied. If any request is not valid then the entire request will
 * fail and nothing will be applied.
 *
 * Some requests have replies to
 * give you some information about how
 * they are applied. The replies will mirror the requests.  For example,
 * if you applied 4 updates and the 3rd one had a reply, then the
 * response will have 2 empty replies, the actual reply, and another empty
 * reply, in that order.
 *
 * Due to the collaborative nature of spreadsheets, it is not guaranteed that
 * the spreadsheet will reflect exactly your changes after this completes,
 * however it is guaranteed that the updates in the request will be
 * applied together atomically. Your changes may be altered with respect to
 * collaborator changes. If there are no collaborators, the spreadsheet
 * should reflect your changes.
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
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await sheets.spreadsheets.batchUpdate({
    // The spreadsheet to apply the updates to.
    spreadsheetId: 'placeholder-value',

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
