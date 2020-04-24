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
 * Rewrites a source object to a destination object. Optionally overrides metadata.
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
      'https://www.googleapis.com/auth/devstorage.read_write',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await storage.objects.rewrite({
    // Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
    destinationBucket: 'placeholder-value',
    // Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
    destinationKmsKeyName: 'placeholder-value',
    // Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
    destinationObject: 'placeholder-value',
    // Apply a predefined set of access controls to the destination object.
    destinationPredefinedAcl: 'placeholder-value',
    // Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
    ifGenerationMatch: 'placeholder-value',
    // Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
    ifGenerationNotMatch: 'placeholder-value',
    // Makes the operation conditional on whether the destination object's current metageneration matches the given value.
    ifMetagenerationMatch: 'placeholder-value',
    // Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
    ifMetagenerationNotMatch: 'placeholder-value',
    // Makes the operation conditional on whether the source object's current generation matches the given value.
    ifSourceGenerationMatch: 'placeholder-value',
    // Makes the operation conditional on whether the source object's current generation does not match the given value.
    ifSourceGenerationNotMatch: 'placeholder-value',
    // Makes the operation conditional on whether the source object's current metageneration matches the given value.
    ifSourceMetagenerationMatch: 'placeholder-value',
    // Makes the operation conditional on whether the source object's current metageneration does not match the given value.
    ifSourceMetagenerationNotMatch: 'placeholder-value',
    // The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid.
    maxBytesRewrittenPerCall: 'placeholder-value',
    // Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
    projection: 'placeholder-value',
    // The project to be billed for this request if the target bucket is requester-pays bucket.
    provisionalUserProject: 'placeholder-value',
    // Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.
    rewriteToken: 'placeholder-value',
    // Name of the bucket in which to find the source object.
    sourceBucket: 'placeholder-value',
    // If present, selects a specific revision of the source object (as opposed to the latest version, the default).
    sourceGeneration: 'placeholder-value',
    // Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
    sourceObject: 'placeholder-value',
    // The project to be billed for this request. Required for Requester Pays buckets.
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
