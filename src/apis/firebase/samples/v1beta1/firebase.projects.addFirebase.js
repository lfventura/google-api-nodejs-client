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
const firebase = google.firebase('v1beta1');

/*
 * Adds Firebase resources to the specified existing
 * [Google Cloud Platform (GCP) `Project`]
 * (https://cloud.google.com/resource-manager/reference/rest/v1/projects).
 * <br>
 * <br>Since a FirebaseProject is actually also a GCP `Project`, a
 * `FirebaseProject` uses underlying GCP identifiers (most importantly,
 * the `projectId`) as its own for easy interop with GCP APIs.
 * <br>
 * <br>The result of this call is an [`Operation`](../../v1beta1/operations).
 * Poll the `Operation` to track the provisioning process by calling
 * GetOperation until
 * [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When
 * `done` is `true`, the `Operation` has either succeeded or failed. If the
 * `Operation` succeeded, its
 * [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to
 * a FirebaseProject; if the `Operation` failed, its
 * [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a
 * google.rpc.Status. The `Operation` is automatically deleted after
 * completion, so there is no need to call
 * DeleteOperation.
 * <br>
 * <br>This method does not modify any billing account information on the
 * underlying GCP `Project`.
 * <br>
 * <br>To call `AddFirebase`, a member must be an Editor or Owner for the
 * existing GCP `Project`. Service accounts cannot call `AddFirebase`.
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
      'https://www.googleapis.com/auth/firebase',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await firebase.projects.addFirebase({
    // The resource name of the GCP `Project` to which Firebase resources will be added, in the format: <br><code>projects/<var>projectId</var></code> After calling `AddFirebase`, the [`projectId`](https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project.FIELDS.project_id) of the GCP `Project` is also the `projectId` of the FirebaseProject.
    project: 'projects/my-project',

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
