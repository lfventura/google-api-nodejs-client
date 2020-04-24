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
 * Lists PerfSampleSeries for a given Step.
 *
 * The request provides an optional filter which specifies one or more
 * PerfMetricsType to include in the result; if none returns all.
 * The resulting PerfSampleSeries are sorted by ids.
 *
 * May return any of the following canonical error codes:
 * - NOT_FOUND - The containing Step does not exist
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
  const res = await toolresults.perfSampleSeries.list({
    // A tool results execution ID.
    executionId: 'placeholder-value',
    // Specify one or more PerfMetricType values such as CPU to filter the result
    filter: 'placeholder-value',
    // A tool results history ID.
    historyId: 'placeholder-value',
    // The cloud project
    projectId: 'placeholder-value',
    // A tool results step ID.
    stepId: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
