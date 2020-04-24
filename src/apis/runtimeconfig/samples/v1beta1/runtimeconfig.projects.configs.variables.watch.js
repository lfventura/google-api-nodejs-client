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
const runtimeconfig = google.runtimeconfig('v1beta1');

/*
 * Watches a specific variable and waits for a change in the variable's value.
 * When there is a change, this method returns the new value or times out.
 *
 * If a variable is deleted while being watched, the `variableState` state is
 * set to `DELETED` and the method returns the last known variable `value`.
 *
 * If you set the deadline for watching to a larger value than internal
 * timeout (60 seconds), the current variable value is returned and the
 * `variableState` will be `VARIABLE_STATE_UNSPECIFIED`.
 *
 * To learn more about creating a watcher, read the
 * [Watching a Variable for
 * Changes](/deployment-manager/runtime-configurator/watching-a-variable)
 * documentation.
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
      'https://www.googleapis.com/auth/cloudruntimeconfig',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await runtimeconfig.projects.configs.variables.watch({
    // The name of the variable to watch, in the format:  `projects/[PROJECT_ID]/configs/[CONFIG_NAME]`
    name: 'projects/my-project/configs/[^/]+/variables/.*',

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
