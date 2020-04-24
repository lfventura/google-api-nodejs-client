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
const storage = google.storage('v1');

/*
 * Patches an object's metadata.
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
      'https://www.googleapis.com/auth/devstorage.full_control',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await storage.objects.patch({
    // Name of the bucket in which the object resides.
    bucket: 'placeholder-value',
    // If present, selects a specific revision of this object (as opposed to the latest version, the default).
    generation: 'placeholder-value',
    // Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
    ifGenerationMatch: 'placeholder-value',
    // Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
    ifGenerationNotMatch: 'placeholder-value',
    // Makes the operation conditional on whether the object's current metageneration matches the given value.
    ifMetagenerationMatch: 'placeholder-value',
    // Makes the operation conditional on whether the object's current metageneration does not match the given value.
    ifMetagenerationNotMatch: 'placeholder-value',
    // Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
    object: 'placeholder-value',
    // Apply a predefined set of access controls to this object.
    predefinedAcl: 'placeholder-value',
    // Set of properties to return. Defaults to full.
    projection: 'placeholder-value',
    // The project to be billed for this request if the target bucket is requester-pays bucket.
    provisionalUserProject: 'placeholder-value',
    // The project to be billed for this request, for Requester Pays buckets.
    userProject: 'placeholder-value',

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
