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
const cloudresourcemanager = google.cloudresourcemanager('v2');

/*
 * Moves a Folder under a new resource parent.
 * Returns an Operation which can be used to track the progress of the
 * folder move workflow.
 * Upon success the Operation.response field will be populated with the
 * moved Folder.
 * Upon failure, a FolderOperationError categorizing the failure cause will
 * be returned - if the failure occurs synchronously then the
 * FolderOperationError will be returned via the Status.details field
 * and if it occurs asynchronously then the FolderOperation will be returned
 * via the Operation.error field.
 * In addition, the Operation.metadata field will be populated with a
 * FolderOperation message as an aid to stateless clients.
 * Folder moves will be rejected if they violate either the naming, height
 * or fanout constraints described in the
 * CreateFolder documentation.
 * The caller must have `resourcemanager.folders.move` permission on the
 * folder's current and proposed new parent.
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
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await cloudresourcemanager.folders.move({
    // Required. The resource name of the Folder to move. Must be of the form folders/{folder_id}
    name: 'folders/[^/]+',

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
