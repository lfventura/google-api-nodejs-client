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
const cloudkms = google.cloudkms('v1');

/*
 * Schedule a CryptoKeyVersion for destruction.
 *
 * Upon calling this method, CryptoKeyVersion.state will be set to
 * DESTROY_SCHEDULED
 * and destroy_time will be set to a time 24
 * hours in the future, at which point the state
 * will be changed to
 * DESTROYED, and the key
 * material will be irrevocably destroyed.
 *
 * Before the destroy_time is reached,
 * RestoreCryptoKeyVersion may be called to reverse the process.
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
      'https://www.googleapis.com/auth/cloudkms',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.destroy(
    {
      // Required. The resource name of the CryptoKeyVersion to destroy.
      name:
        'projects/my-project/locations/my-location/keyRings/[^/]+/cryptoKeys/[^/]+/cryptoKeyVersions/[^/]+',

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
