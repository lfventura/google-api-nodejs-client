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
const dfareporting = google.dfareporting('v3.3');

/*
 * Retrieves a list of user roles, possibly filtered. This method supports paging.
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
    scopes: ['https://www.googleapis.com/auth/dfatrafficking'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await dfareporting.userRoles.list({
    // Select only account level user roles not associated with any specific subaccount.
    accountUserRoleOnly: 'placeholder-value',
    // Select only user roles with the specified IDs.
    ids: 'placeholder-value',
    // Maximum number of results to return.
    maxResults: 'placeholder-value',
    // Value of the nextPageToken from the previous result page.
    pageToken: 'placeholder-value',
    // User profile ID associated with this request.
    profileId: 'placeholder-value',
    // Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "userrole*2015" will return objects with names like "userrole June 2015", "userrole April 2015", or simply "userrole 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "userrole" will match objects with name "my userrole", "userrole 2015", or simply "userrole".
    searchString: 'placeholder-value',
    // Field by which to sort the list.
    sortField: 'placeholder-value',
    // Order of sorted results.
    sortOrder: 'placeholder-value',
    // Select only user roles that belong to this subaccount.
    subaccountId: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
