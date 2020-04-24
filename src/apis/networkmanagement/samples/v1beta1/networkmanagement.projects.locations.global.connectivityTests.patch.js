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
 * Updates the configuration of an existing `ConnectivityTest`.
 * After you update a test, the reachability analysis is performed as part
 * of the long running operation, which completes when the analysis completes.
 * The Reachability state in the test resource is updated with the new result.
 *
 * If the endpoint specifications in `ConnectivityTest` are invalid
 * (for example, they contain non-existent resources in the network, or the
 * user does not have read permissions to the network configurations of
 * listed projects), then the reachability result returns a value of
 * <code>UNKNOWN</code>.
 *
 * If the endpoint specifications in `ConnectivityTest` are incomplete, the
 * reachability result returns a value of `AMBIGUOUS`. See the documentation
 * in `ConnectivityTest` for for more details.
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
  const res = await networkmanagement.projects.locations.global.connectivityTests.patch(
    {
      // Required. Unique name of the resource using the form:     `projects/{project_id}/tests/{test_id}`
      name: 'projects/my-project/locations/global/connectivityTests/[^/]+',
      // Required. Mask of fields to update. At least one path must be supplied in this field.
      updateMask: 'placeholder-value',

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
