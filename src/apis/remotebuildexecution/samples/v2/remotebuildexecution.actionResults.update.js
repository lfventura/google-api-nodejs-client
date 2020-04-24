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
const remotebuildexecution = google.remotebuildexecution('v2');

/*
 * Upload a new execution result.
 *
 * In order to allow the server to perform access control based on the type of
 * action, and to assist with client debugging, the client MUST first upload
 * the Action that produced the
 * result, along with its
 * Command, into the
 * `ContentAddressableStorage`.
 *
 * Errors:
 *
 * * `INVALID_ARGUMENT`: One or more arguments are invalid.
 * * `FAILED_PRECONDITION`: One or more errors occurred in updating the
 *   action result, such as a missing command or action.
 * * `RESOURCE_EXHAUSTED`: There is insufficient storage space to add the
 *   entry to the cache.
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
  const res = await remotebuildexecution.actionResults.update({
    // The hash. In the case of SHA-256, it will always be a lowercase hex string exactly 64 characters long.
    hash: 'placeholder-value',
    // The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
    instanceName: '.*',
    // The priority (relative importance) of this content in the overall cache. Generally, a lower value means a longer retention time or other advantage, but the interpretation of a given value is server-dependent. A priority of 0 means a *default* value, decided by the server.  The particular semantics of this field is up to the server. In particular, every server will have their own supported range of priorities, and will decide how these map into retention/eviction policy.
    'resultsCachePolicy.priority': 'placeholder-value',
    // The size of the blob, in bytes.
    sizeBytes: 'placeholder-value',

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
