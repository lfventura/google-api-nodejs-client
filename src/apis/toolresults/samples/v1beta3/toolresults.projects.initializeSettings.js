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
const toolresults = google.toolresults('v1beta3');

/*
 * Creates resources for settings which have not yet been set.
 *
 * Currently, this creates a single resource: a Google Cloud Storage bucket,
 * to be used as the default bucket for this project. The bucket is created
 * in an FTL-own storage project. Except for in rare cases, calling this
 * method in parallel from multiple clients will only create a single bucket.
 * In order to avoid unnecessary storage charges, the bucket is configured to
 * automatically delete objects older than 90 days.
 *
 * The bucket is created with the following permissions:
 * - Owner access for owners of central storage project (FTL-owned)
 * - Writer access for owners/editors of customer project
 * - Reader access for viewers of customer project
 * The default ACL on objects created in the bucket is:
 * - Owner access for owners of central storage project
 * - Reader access for owners/editors/viewers of customer project
 * See Google Cloud Storage documentation for more details.
 *
 * If there is already a default bucket set and the project can access the
 * bucket, this call does nothing. However, if the project doesn't have the
 * permission to access the bucket or the bucket is deleted, a new bucket
 * will be created.
 *
 * May return any canonical error codes, including the following:
 *
 * - PERMISSION_DENIED - if the user is not authorized to write to project
 * - Any error code raised by Google Cloud Storage
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
  const res = await toolresults.projects.initializeSettings({
    // A Project id.  Required.
    projectId: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
