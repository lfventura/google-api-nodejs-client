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
 * Creates an instance and begins preparing it to begin serving. The
 * returned long-running operation
 * can be used to track the progress of preparing the new
 * instance. The instance name is assigned by the caller. If the
 * named instance already exists, `CreateInstance` returns
 * `ALREADY_EXISTS`.
 *
 * Immediately upon completion of this request:
 *
 *   * The instance is readable via the API, with all requested attributes
 *     but no allocated resources. Its state is `CREATING`.
 *
 * Until completion of the returned operation:
 *
 *   * Cancelling the operation renders the instance immediately unreadable
 *     via the API.
 *   * The instance can be deleted.
 *   * All other attempts to modify the instance are rejected.
 *
 * Upon completion of the returned operation:
 *
 *   * Billing for all successfully-allocated resources begins (some types
 *     may have lower than the requested levels).
 *   * Databases can be created in the instance.
 *   * The instance's allocated resource levels are readable via the API.
 *   * The instance's state becomes `READY`.
 *
 * The returned long-running operation will
 * have a name of the format `<instance_name>/operations/<operation_id>` and
 * can be used to track creation of the instance.  The
 * metadata field type is
 * CreateInstanceMetadata.
 * The response field type is
 * Instance, if successful.
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
  const res = await spanner.projects.instances.create({
    // Required. The name of the project in which to create the instance. Values are of the form `projects/<project>`.
    parent: 'projects/my-project',

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
