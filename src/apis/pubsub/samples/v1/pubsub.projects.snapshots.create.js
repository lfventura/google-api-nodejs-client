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
const pubsub = google.pubsub('v1');

/*
 * Creates a snapshot from the requested subscription. Snapshots are used in
 * <a href="https://cloud.google.com/pubsub/docs/replay-overview">Seek</a>
 * operations, which allow
 * you to manage message acknowledgments in bulk. That is, you can set the
 * acknowledgment state of messages in an existing subscription to the state
 * captured by a snapshot.
 * <br><br>If the snapshot already exists, returns `ALREADY_EXISTS`.
 * If the requested subscription doesn't exist, returns `NOT_FOUND`.
 * If the backlog in the subscription is too old -- and the resulting snapshot
 * would expire in less than 1 hour -- then `FAILED_PRECONDITION` is returned.
 * See also the `Snapshot.expire_time` field. If the name is not provided in
 * the request, the server will assign a random
 * name for this snapshot on the same project as the subscription, conforming
 * to the
 * [resource name
 * format](https://cloud.google.com/pubsub/docs/admin#resource_names). The
 * generated name is populated in the returned Snapshot object. Note that for
 * REST API requests, you must specify a name in the request.
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
      'https://www.googleapis.com/auth/pubsub',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await pubsub.projects.snapshots.create({
    // Required. User-provided name for this snapshot. If the name is not provided in the request, the server will assign a random name for this snapshot on the same project as the subscription. Note that for REST API requests, you must specify a name.  See the <a href="https://cloud.google.com/pubsub/docs/admin#resource_names"> resource name rules</a>. Format is `projects/{project}/snapshots/{snap}`.
    name: 'projects/my-project/snapshots/[^/]+',

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
