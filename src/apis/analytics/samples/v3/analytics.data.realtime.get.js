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
const analytics = google.analytics('v3');

/*
 * Returns real time data for a view (profile).
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
      'https://www.googleapis.com/auth/analytics',
      'https://www.googleapis.com/auth/analytics.readonly',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await analytics.data.realtime.get({
    // A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'.
    dimensions: '(ga:.+)|(rt:.+)',
    // A comma-separated list of dimension or metric filters to be applied to real time data.
    filters: '(ga:.+)|(rt:.+)',
    // Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
    ids: 'ga:[0-9]+',
    // The maximum number of entries to include in this feed.
    'max-results': 'placeholder-value',
    // A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified.
    metrics: '(ga:.+)|(rt:.+)',
    // A comma-separated list of dimensions or metrics that determine the sort order for real time data.
    sort: '(-)?((ga:.+)|(rt:.+))',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
