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
 * Creates a new session. A session can be used to perform
 * transactions that read and/or modify data in a Cloud Spanner database.
 * Sessions are meant to be reused for many consecutive
 * transactions.
 *
 * Sessions can only execute one transaction at a time. To execute
 * multiple concurrent read-write/write-only transactions, create
 * multiple sessions. Note that standalone reads and queries use a
 * transaction internally, and count toward the one transaction
 * limit.
 *
 * Active sessions use additional server resources, so it is a good idea to
 * delete idle and unneeded sessions.
 * Aside from explicit deletes, Cloud Spanner may delete sessions for which no
 * operations are sent for more than an hour. If a session is deleted,
 * requests to it return `NOT_FOUND`.
 *
 * Idle sessions can be kept alive by sending a trivial SQL query
 * periodically, e.g., `"SELECT 1"`.
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
  const res = await spanner.projects.instances.databases.sessions.create({
    // Required. The database in which the new session is created.
    database: 'projects/my-project/instances/[^/]+/databases/[^/]+',

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
