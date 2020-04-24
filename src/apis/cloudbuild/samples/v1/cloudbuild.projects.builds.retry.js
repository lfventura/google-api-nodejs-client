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
const cloudbuild = google.cloudbuild('v1');

/*
 * Creates a new build based on the specified build.
 *
 * This method creates a new build using the original build request, which may
 * or may not result in an identical build.
 *
 * For triggered builds:
 *
 * * Triggered builds resolve to a precise revision; therefore a retry of a
 * triggered build will result in a build that uses the same revision.
 *
 * For non-triggered builds that specify `RepoSource`:
 *
 * * If the original build built from the tip of a branch, the retried build
 * will build from the tip of that branch, which may not be the same revision
 * as the original build.
 * * If the original build specified a commit sha or revision ID, the retried
 * build will use the identical source.
 *
 * For builds that specify `StorageSource`:
 *
 * * If the original build pulled source from Google Cloud Storage without
 * specifying the generation of the object, the new build will use the current
 * object, which may be different from the original build source.
 * * If the original build pulled source from Cloud Storage and specified the
 * generation of the object, the new build will attempt to use the same
 * object, which may or may not be available depending on the bucket's
 * lifecycle management settings.
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
  const res = await cloudbuild.projects.builds.retry({
    // Required. Build ID of the original build.
    id: 'placeholder-value',
    // Required. ID of the project.
    projectId: 'placeholder-value',

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
