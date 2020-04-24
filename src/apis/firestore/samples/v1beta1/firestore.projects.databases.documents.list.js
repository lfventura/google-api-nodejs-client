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
const firestore = google.firestore('v1beta1');

/*
 * Lists documents.
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
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/datastore',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await firestore.projects.databases.documents.list({
    // Required. The collection ID, relative to `parent`, to list. For example: `chatrooms` or `messages`.
    collectionId: 'placeholder-value',
    // The list of field paths in the mask. See Document.fields for a field path syntax reference.
    'mask.fieldPaths': 'placeholder-value',
    // The order to sort results by. For example: `priority desc, name`.
    orderBy: 'placeholder-value',
    // The maximum number of documents to return.
    pageSize: 'placeholder-value',
    // The `next_page_token` value returned from a previous List request, if any.
    pageToken: 'placeholder-value',
    // Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
    parent: 'projects/my-project/databases/[^/]+/documents/[^/]+/.*',
    // Reads documents as they were at the given time. This may not be older than 270 seconds.
    readTime: 'placeholder-value',
    // If the list should show missing documents. A missing document is a document that does not exist but has sub-documents. These documents will be returned with a key but will not have fields, Document.create_time, or Document.update_time set.  Requests with `show_missing` may not specify `where` or `order_by`.
    showMissing: 'placeholder-value',
    // Reads documents in a transaction.
    transaction: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
