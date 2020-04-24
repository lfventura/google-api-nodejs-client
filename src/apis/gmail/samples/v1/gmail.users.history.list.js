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
const gmail = google.gmail('v1');

/*
 * Lists the history of all changes to the given mailbox. History results are
 * returned in chronological order (increasing <code>historyId</code>).
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
      'https://mail.google.com/',
      'https://www.googleapis.com/auth/gmail.metadata',
      'https://www.googleapis.com/auth/gmail.modify',
      'https://www.googleapis.com/auth/gmail.readonly',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await gmail.users.history.list({
    // History types to be returned by the function
    historyTypes: 'placeholder-value',
    // Only return messages with a label matching the ID.
    labelId: 'placeholder-value',
    // The maximum number of history records to return.
    maxResults: 'placeholder-value',
    // Page token to retrieve a specific page of results in the list.
    pageToken: 'placeholder-value',
    // Required. Returns history records after the specified <code>startHistoryId</code>. The supplied <code>startHistoryId</code> should be obtained from the <code>historyId</code> of a message, thread, or previous <code>list</code> response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date <code>startHistoryId</code> typically returns an <code>HTTP 404</code> error code. A <code>historyId</code> is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an <code>HTTP 404</code> error response, your  application should perform a full sync. If you receive no <code>nextPageToken</code> in the response, there are no updates to retrieve and you can store the returned <code>historyId</code> for a future request.
    startHistoryId: 'placeholder-value',
    // The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.
    userId: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
