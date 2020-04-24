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
 * Lists the messages in the user's mailbox.
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
  const res = await gmail.users.messages.list({
    // Include messages from <code>SPAM</code> and <code>TRASH</code> in the results.
    includeSpamTrash: 'placeholder-value',
    // Only return messages with labels that match all of the specified label IDs.
    labelIds: 'placeholder-value',
    // Maximum number of messages to return.
    maxResults: 'placeholder-value',
    // Page token to retrieve a specific page of results in the list.
    pageToken: 'placeholder-value',
    // Only return messages matching the specified query. Supports the same query format as the Gmail search box. For example, <code>"from:someuser@example.com rfc822msgid:&lt;somemsgid@example.com&gt; is:unread"</code>. Parameter cannot be used when accessing the api using the gmail.metadata scope.
    q: 'placeholder-value',
    // The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.
    userId: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
