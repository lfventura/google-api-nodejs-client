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
const spanner = google.spanner('v1');

/*
 * Creates a set of partition tokens that can be used to execute a query
 * operation in parallel.  Each of the returned partition tokens can be used
 * by ExecuteStreamingSql to specify a subset
 * of the query result to read.  The same session and read-only transaction
 * must be used by the PartitionQueryRequest used to create the
 * partition tokens and the ExecuteSqlRequests that use the partition tokens.
 *
 * Partition tokens become invalid when the session used to create them
 * is deleted, is idle for too long, begins a new transaction, or becomes too
 * old.  When any of these happen, it is not possible to resume the query, and
 * the whole operation must be restarted from the beginning.
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
      'https://www.googleapis.com/auth/spanner.data',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await spanner.projects.instances.databases.sessions.partitionQuery(
    {
      // Required. The session used to create the partitions.
      session:
        'projects/my-project/instances/[^/]+/databases/[^/]+/sessions/[^/]+',

      // Request body metadata
      requestBody: {
        // request body parameters
      },
    }
  );
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
