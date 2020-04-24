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
const clouddebugger = google.clouddebugger('v2');

/*
 * Returns the list of all active breakpoints for the debuggee.
 *
 * The breakpoint specification (`location`, `condition`, and `expressions`
 * fields) is semantically immutable, although the field values may
 * change. For example, an agent may update the location line number
 * to reflect the actual line where the breakpoint was set, but this
 * doesn't change the breakpoint semantics.
 *
 * This means that an agent does not need to check if a breakpoint has changed
 * when it encounters the same breakpoint on a successive call.
 * Moreover, an agent should remember the breakpoints that are completed
 * until the controller removes them from the active list to avoid
 * setting those breakpoints again.
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
      'https://www.googleapis.com/auth/cloud_debugger',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await clouddebugger.controller.debuggees.breakpoints.list({
    // Identifies the agent. This is the ID returned in the RegisterDebuggee response.
    agentId: 'placeholder-value',
    // Required. Identifies the debuggee.
    debuggeeId: 'placeholder-value',
    // If set to `true` (recommended), returns `google.rpc.Code.OK` status and sets the `wait_expired` response field to `true` when the server-selected timeout has expired.  If set to `false` (deprecated), returns `google.rpc.Code.ABORTED` status when the server-selected timeout has expired.
    successOnTimeout: 'placeholder-value',
    // A token that, if specified, blocks the method call until the list of active breakpoints has changed, or a server-selected timeout has expired. The value should be set from the `next_wait_token` field in the last response. The initial value should be set to `"init"`.
    waitToken: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
