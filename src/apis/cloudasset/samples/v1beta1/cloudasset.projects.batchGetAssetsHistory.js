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
const cloudasset = google.cloudasset('v1beta1');

/*
 * Batch gets the update history of assets that overlap a time window.
 * For RESOURCE content, this API outputs history with asset in both
 * non-delete or deleted status.
 * For IAM_POLICY content, this API outputs history when the asset and its
 * attached IAM POLICY both exist. This can create gaps in the output history.
 * If a specified asset does not exist, this API returns an INVALID_ARGUMENT
 * error.
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
  const res = await cloudasset.projects.batchGetAssetsHistory({
    // A list of the full names of the assets. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more info.  The request becomes a no-op if the asset name list is empty, and the max size of the asset name list is 100 in one request.
    assetNames: 'placeholder-value',
    // Optional. The content type.
    contentType: 'placeholder-value',
    // Required. The relative name of the root asset. It can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id")", or a project number (such as "projects/12345").
    parent: 'projects/my-project',
    // End time of the time window (inclusive). Current timestamp if not specified.
    'readTimeWindow.endTime': 'placeholder-value',
    // Start time of the time window (exclusive).
    'readTimeWindow.startTime': 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
