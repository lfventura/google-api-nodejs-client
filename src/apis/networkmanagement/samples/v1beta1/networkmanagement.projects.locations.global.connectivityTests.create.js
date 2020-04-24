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
const networkmanagement = google.networkmanagement('v1beta1');

/*
 * Creates a new Connectivity Test.
 * After you create a test, the reachability analysis is performed as part
 * of the long running operation, which completes when the analysis completes.
 *
 * If the endpoint specifications in `ConnectivityTest` are invalid
 * (for example, containing non-existent resources in the network, or you
 * don't have read permissions to the network configurations of listed
 * projects), then the reachability result returns a value of `UNKNOWN`.
 *
 * If the endpoint specifications in `ConnectivityTest` are
 * incomplete, the reachability result returns a value of
 * <code>AMBIGUOUS</code>. For more information,
 * see the Connectivity Test documentation.
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
  const res = await networkmanagement.projects.locations.global.connectivityTests.create(
    {
      // Required. The parent resource of the Connectivity Test to create:     `projects/{project_id}/locations/global`
      parent: 'projects/my-project/locations/global',
      // Required. The logical name of the Connectivity Test in your project with the following restrictions:  * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project
      testId: 'placeholder-value',

      // Request body metadata
      requestBody: {
        // request body parameters
      },
    }
  );
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
