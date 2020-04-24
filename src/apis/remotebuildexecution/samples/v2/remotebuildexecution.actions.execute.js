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
 * Execute an action remotely.
 *
 * In order to execute an action, the client must first upload all of the
 * inputs, the
 * Command to run, and the
 * Action into the
 * ContentAddressableStorage.
 * It then calls `Execute` with an `action_digest` referring to them. The
 * server will run the action and eventually return the result.
 *
 * The input `Action`'s fields MUST meet the various canonicalization
 * requirements specified in the documentation for their types so that it has
 * the same digest as other logically equivalent `Action`s. The server MAY
 * enforce the requirements and return errors if a non-canonical input is
 * received. It MAY also proceed without verifying some or all of the
 * requirements, such as for performance reasons. If the server does not
 * verify the requirement, then it will treat the `Action` as distinct from
 * another logically equivalent action if they hash differently.
 *
 * Returns a stream of
 * google.longrunning.Operation messages
 * describing the resulting execution, with eventual `response`
 * ExecuteResponse. The
 * `metadata` on the operation is of type
 * ExecuteOperationMetadata.
 *
 * If the client remains connected after the first response is returned after
 * the server, then updates are streamed as if the client had called
 * WaitExecution
 * until the execution completes or the request reaches an error. The
 * operation can also be queried using Operations
 * API.
 *
 * The server NEED NOT implement other methods or functionality of the
 * Operations API.
 *
 * Errors discovered during creation of the `Operation` will be reported
 * as gRPC Status errors, while errors that occurred while running the
 * action will be reported in the `status` field of the `ExecuteResponse`. The
 * server MUST NOT set the `error` field of the `Operation` proto.
 * The possible errors include:
 *
 * * `INVALID_ARGUMENT`: One or more arguments are invalid.
 * * `FAILED_PRECONDITION`: One or more errors occurred in setting up the
 *   action requested, such as a missing input or command or no worker being
 *   available. The client may be able to fix the errors and retry.
 * * `RESOURCE_EXHAUSTED`: There is insufficient quota of some resource to run
 *   the action.
 * * `UNAVAILABLE`: Due to a transient condition, such as all workers being
 *   occupied (and the server does not support a queue), the action could not
 *   be started. The client should retry.
 * * `INTERNAL`: An internal error occurred in the execution engine or the
 *   worker.
 * * `DEADLINE_EXCEEDED`: The execution timed out.
 * * `CANCELLED`: The operation was cancelled by the client. This status is
 *   only possible if the server implements the Operations API CancelOperation
 *   method, and it was called for the current execution.
 *
 * In the case of a missing input or command, the server SHOULD additionally
 * send a PreconditionFailure error detail
 * where, for each requested blob not present in the CAS, there is a
 * `Violation` with a `type` of `MISSING` and a `subject` of
 * `"blobs/{hash}/{size}"` indicating the digest of the missing blob.
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
  const res = await remotebuildexecution.actions.execute({
    // The instance of the execution system to operate against. A server may support multiple instances of the execution system (with their own workers, storage, caches, etc.). The server MAY require use of this field to select between them in an implementation-defined fashion, otherwise it can be omitted.
    instanceName: '.*',

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
