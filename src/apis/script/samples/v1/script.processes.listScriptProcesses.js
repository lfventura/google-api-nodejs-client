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
const script = google.script('v1');

/*
 * List information about a script's executed processes, such as process type
 * and current status.
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
    scopes: ['https://www.googleapis.com/auth/script.processes'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await script.processes.listScriptProcesses({
    // The maximum number of returned processes per page of results. Defaults to 50.
    pageSize: 'placeholder-value',
    // The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
    pageToken: 'placeholder-value',
    // The script ID of the project whose processes are listed.
    scriptId: 'placeholder-value',
    // Optional field used to limit returned processes to those originating from projects with a specific deployment ID.
    'scriptProcessFilter.deploymentId': 'placeholder-value',
    // Optional field used to limit returned processes to those that completed on or before the given timestamp.
    'scriptProcessFilter.endTime': 'placeholder-value',
    // Optional field used to limit returned processes to those originating from a script function with the given function name.
    'scriptProcessFilter.functionName': 'placeholder-value',
    // Optional field used to limit returned processes to those that were started on or after the given timestamp.
    'scriptProcessFilter.startTime': 'placeholder-value',
    // Optional field used to limit returned processes to those having one of the specified process statuses.
    'scriptProcessFilter.statuses': 'placeholder-value',
    // Optional field used to limit returned processes to those having one of the specified process types.
    'scriptProcessFilter.types': 'placeholder-value',
    // Optional field used to limit returned processes to those having one of the specified user access levels.
    'scriptProcessFilter.userAccessLevels': 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
