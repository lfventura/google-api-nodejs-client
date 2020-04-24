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
const cloudresourcemanager = google.cloudresourcemanager('v1beta1');

/*
 * Marks the Project identified by the specified
 * `project_id` (for example, `my-project-123`) for deletion.
 * This method will only affect the Project if it has a lifecycle state of
 * ACTIVE.
 *
 * This method changes the Project's lifecycle state from
 * ACTIVE
 * to DELETE_REQUESTED.
 * The deletion starts at an unspecified time, at which point the project is
 * no longer accessible.
 *
 * Until the deletion completes, you can check the lifecycle state
 * checked by retrieving the Project with GetProject,
 * and the Project remains visible to ListProjects.
 * However, you cannot update the project.
 *
 * After the deletion completes, the Project is not retrievable by
 * the  GetProject
 * and ListProjects
 * methods.
 *
 * The caller must have modify permissions for this Project.
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
  const res = await cloudresourcemanager.projects.delete({
    // The Project ID (for example, `foo-bar-123`).  Required.
    projectId: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
