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
const toolresults = google.toolresults('v1beta3');

/*
 * Lists Test Cases attached to a Step.
 * Experimental test cases API. Still in active development.
 *
 * May return any of the following canonical error codes:
 *
 * - PERMISSION_DENIED - if the user is not authorized to write to project
 * - INVALID_ARGUMENT - if the request is malformed
 * - NOT_FOUND - if the containing Step does not exist
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
  const res = await toolresults.testCases.list({
    // A Execution id  Required.
    executionId: 'placeholder-value',
    // A History id.  Required.
    historyId: 'placeholder-value',
    // The maximum number of TestCases to fetch.  Default value: 100. The server will use this default if the field is not set or has a value of 0.  Optional.
    pageSize: 'placeholder-value',
    // A continuation token to resume the query at the next item.  Optional.
    pageToken: 'placeholder-value',
    // A Project id.  Required.
    projectId: 'placeholder-value',
    // A Step id. Note: This step must include a TestExecutionStep.  Required.
    stepId: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
