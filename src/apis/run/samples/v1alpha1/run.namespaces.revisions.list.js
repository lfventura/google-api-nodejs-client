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
const run = google.run('v1alpha1');

/*
 * Rpc to list revisions.
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
  const res = await run.namespaces.revisions.list({
    // Optional encoded string to continue paging.
    continue: 'placeholder-value',
    // Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
    fieldSelector: 'placeholder-value',
    // Not currently used by Cloud Run.
    includeUninitialized: 'placeholder-value',
    // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
    labelSelector: 'placeholder-value',
    // The maximum number of records that should be returned.
    limit: 'placeholder-value',
    // The project ID or project number from which the revisions should be listed.
    parent: 'namespaces/[^/]+',
    // The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
    resourceVersion: 'placeholder-value',
    // Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
    watch: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
