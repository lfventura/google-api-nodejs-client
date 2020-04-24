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
const spanner = google.spanner('v1');

/*
 * Updates an instance, and begins allocating or releasing resources
 * as requested. The returned long-running
 * operation can be used to track the
 * progress of updating the instance. If the named instance does not
 * exist, returns `NOT_FOUND`.
 *
 * Immediately upon completion of this request:
 *
 *   * For resource types for which a decrease in the instance's allocation
 *     has been requested, billing is based on the newly-requested level.
 *
 * Until completion of the returned operation:
 *
 *   * Cancelling the operation sets its metadata's
 *     cancel_time, and begins
 *     restoring resources to their pre-request values. The operation
 *     is guaranteed to succeed at undoing all resource changes,
 *     after which point it terminates with a `CANCELLED` status.
 *   * All other attempts to modify the instance are rejected.
 *   * Reading the instance via the API continues to give the pre-request
 *     resource levels.
 *
 * Upon completion of the returned operation:
 *
 *   * Billing begins for all successfully-allocated resources (some types
 *     may have lower than the requested levels).
 *   * All newly-reserved resources are available for serving the instance's
 *     tables.
 *   * The instance's new resource levels are readable via the API.
 *
 * The returned long-running operation will
 * have a name of the format `<instance_name>/operations/<operation_id>` and
 * can be used to track the instance modification.  The
 * metadata field type is
 * UpdateInstanceMetadata.
 * The response field type is
 * Instance, if successful.
 *
 * Authorization requires `spanner.instances.update` permission on
 * resource name.
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
      'https://www.googleapis.com/auth/spanner.admin',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await spanner.projects.instances.patch({
    // Required. A unique identifier for the instance, which cannot be changed after the instance is created. Values are of the form `projects/<project>/instances/a-z*[a-z0-9]`. The final segment of the name must be between 2 and 64 characters in length.
    name: 'projects/my-project/instances/[^/]+',

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
