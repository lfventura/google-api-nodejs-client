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
const cloudresourcemanager = google.cloudresourcemanager('v2beta1');

/*
 * Creates a Folder in the resource hierarchy.
 * Returns an Operation which can be used to track the progress of the
 * folder creation workflow.
 * Upon success the Operation.response field will be populated with the
 * created Folder.
 *
 * In order to succeed, the addition of this new Folder must not violate
 * the Folder naming, height or fanout constraints.
 *
 * + The Folder's display_name must be distinct from all other Folder's that
 * share its parent.
 * + The addition of the Folder must not cause the active Folder hierarchy
 * to exceed a height of 4. Note, the full active + deleted Folder hierarchy
 * is allowed to reach a height of 8; this provides additional headroom when
 * moving folders that contain deleted folders.
 * + The addition of the Folder must not cause the total number of Folders
 * under its parent to exceed 100.
 *
 * If the operation fails due to a folder constraint violation, some errors
 * may be returned by the CreateFolder request, with status code
 * FAILED_PRECONDITION and an error description. Other folder constraint
 * violations will be communicated in the Operation, with the specific
 * PreconditionFailure returned via the details list in the Operation.error
 * field.
 *
 * The caller must have `resourcemanager.folders.create` permission on the
 * identified parent.
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
  const res = await cloudresourcemanager.folders.create({
    // Required. The resource name of the new Folder's parent. Must be of the form `folders/{folder_id}` or `organizations/{org_id}`.
    parent: 'placeholder-value',

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
