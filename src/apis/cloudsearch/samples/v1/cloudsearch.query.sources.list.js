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
 * Returns list of sources that user can use for Search and Suggest APIs.
 *
 * **Note:** This API requires a standard end user account to execute.
 * A service account can't perform Query API requests directly; to use a
 * service account to perform queries, set up [G Suite domain-wide delegation
 * of
 * authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
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
      'https://www.googleapis.com/auth/cloud_search.query',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await cloudsearch.query.sources.list({
    // Number of sources to return in the response.
    pageToken: 'placeholder-value',
    // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
    'requestOptions.debugOptions.enableDebugging': 'placeholder-value',
    // The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations.  Set this field using the language set in browser or for the page. In the event that the user's language preference is known, set this field to the known user language.  When specified, the documents in search results are biased towards the specified language.  The suggest API does not use this parameter. Instead, suggest autocompletes only based on characters in the query.
    'requestOptions.languageCode': 'placeholder-value',
    // Id of the application created using SearchApplicationsService.
    'requestOptions.searchApplicationId': 'placeholder-value',
    // Current user's time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used.
    'requestOptions.timeZone': 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
