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
const people = google.people('v1');

/*
 * Provides a list of the authenticated user's contacts merged with any
 * connected profiles.
 *
 * The request throws a 400 error if 'personFields' is not specified.
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
      'https://www.googleapis.com/auth/contacts',
      'https://www.googleapis.com/auth/contacts.readonly',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await people.people.connections.list({
    // Optional. The number of connections to include in the response. Valid values are between 1 and 2000, inclusive. Defaults to 100 if not set or set to 0.
    pageSize: 'placeholder-value',
    // Optional. A page token, received from a previous `ListConnections` call. Provide this to retrieve the subsequent page.  When paginating, all other parameters provided to `ListConnections` must match the call that provided the page token.
    pageToken: 'placeholder-value',
    // Required. A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas. Valid values are:  * addresses * ageRanges * biographies * birthdays * coverPhotos * emailAddresses * events * genders * imClients * interests * locales * memberships * metadata * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * residences * sipAddresses * skills * urls * userDefined
    personFields: 'placeholder-value',
    // Required. Comma-separated list of person fields to be included in the response. Each path should start with `person.`: for example, `person.names` or `person.photos`.
    'requestMask.includeField': 'placeholder-value',
    // Optional. Whether the response should include `next_sync_token`, which can be used to get all changes since the last request. For subsequent sync requests use the `sync_token` param instead. Initial sync requests that specify `request_sync_token` have an additional rate limit.
    requestSyncToken: 'placeholder-value',
    // Required. The resource name to return connections for. Only `people/me` is valid.
    resourceName: 'people/[^/]+',
    // Optional. The order in which the connections should be sorted. Defaults to `LAST_MODIFIED_ASCENDING`.
    sortOrder: 'placeholder-value',
    // Optional. A sync token, received from a previous `ListConnections` call. Provide this to retrieve only the resources changed since the last request. Sync requests that specify `sync_token` have an additional rate limit.  When syncing, all other parameters provided to `ListConnections` must match the call that provided the sync token.
    syncToken: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
