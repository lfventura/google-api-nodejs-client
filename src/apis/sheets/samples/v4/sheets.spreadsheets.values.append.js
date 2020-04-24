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
 * Appends values to a spreadsheet. The input range is used to search for
 * existing data and find a "table" within that range. Values will be
 * appended to the next row of the table, starting with the first column of
 * the table. See the
 * [guide](/sheets/api/guides/values#appending_values)
 * and
 * [sample code](/sheets/api/samples/writing#append_values)
 * for specific details of how tables are detected and data is appended.
 *
 * The caller must specify the spreadsheet ID, range, and
 * a valueInputOption.  The `valueInputOption` only
 * controls how the input data will be added to the sheet (column-wise or
 * row-wise), it does not influence what cell the data starts being written
 * to.
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
  const res = await sheets.spreadsheets.values.append({
    // Determines if the update response should include the values of the cells that were appended. By default, responses do not include the updated values.
    includeValuesInResponse: 'placeholder-value',
    // How the input data should be inserted.
    insertDataOption: 'placeholder-value',
    // The A1 notation of a range to search for a logical table of data. Values are appended after the last row of the table.
    range: 'placeholder-value',
    // Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
    responseDateTimeRenderOption: 'placeholder-value',
    // Determines how values in the response should be rendered. The default render option is ValueRenderOption.FORMATTED_VALUE.
    responseValueRenderOption: 'placeholder-value',
    // The ID of the spreadsheet to update.
    spreadsheetId: 'placeholder-value',
    // How the input data should be interpreted.
    valueInputOption: 'placeholder-value',

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
