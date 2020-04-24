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
 * Watch for changes in users list
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
      'https://www.googleapis.com/auth/admin.directory.user',
      'https://www.googleapis.com/auth/admin.directory.user.readonly',
      'https://www.googleapis.com/auth/cloud-platform',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await directory.users.watch({
    // Immutable ID of the G Suite account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
    customer: 'placeholder-value',
    // Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
    customFieldMask: 'placeholder-value',
    // Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead.
    domain: 'placeholder-value',
    // Event on which subscription is intended (if subscribing)
    event: 'placeholder-value',
    // Maximum number of results to return.
    maxResults: 'placeholder-value',
    // Column to use for sorting results
    orderBy: 'placeholder-value',
    // Token to specify next page in the list
    pageToken: 'placeholder-value',
    // What subset of fields to fetch for this user.
    projection: 'placeholder-value',
    // Query string search. Should be of the form "". Complete documentation is at https://developers.google.com/admin-sdk/directory/v1/guides/search-users
    query: 'placeholder-value',
    // If set to true, retrieves the list of deleted users. (Default: false)
    showDeleted: 'placeholder-value',
    // Whether to return results in ascending or descending order.
    sortOrder: 'placeholder-value',
    // Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
    viewType: 'placeholder-value',

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
