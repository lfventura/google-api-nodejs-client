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
 * Returns the spreadsheet at the given ID.
 * The caller must specify the spreadsheet ID.
 *
 * This method differs from GetSpreadsheet in that it allows selecting
 * which subsets of spreadsheet data to return by specifying a
 * dataFilters parameter.
 * Multiple DataFilters can be specified.  Specifying one or
 * more data filters will return the portions of the spreadsheet that
 * intersect ranges matched by any of the filters.
 *
 * By default, data within grids will not be returned.
 * You can include grid data one of two ways:
 *
 * * Specify a field mask listing your desired fields using the `fields` URL
 * parameter in HTTP
 *
 * * Set the includeGridData
 * parameter to true.  If a field mask is set, the `includeGridData`
 * parameter is ignored
 *
 * For large spreadsheets, it is recommended to retrieve only the specific
 * fields of the spreadsheet that you want.
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
  const res = await sheets.spreadsheets.getByDataFilter({
    // The spreadsheet to request.
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
