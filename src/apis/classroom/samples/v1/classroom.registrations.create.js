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
const classroom = google.classroom('v1');

/*
 * Creates a `Registration`, causing Classroom to start sending notifications
 * from the provided `feed` to the destination provided in `cloudPubSubTopic`.
 *
 * Returns the created `Registration`. Currently, this will be the same as
 * the argument, but with server-assigned fields such as `expiry_time` and
 * `id` filled in.
 *
 * Note that any value specified for the `expiry_time` or `id` fields will be
 * ignored.
 *
 * While Classroom may validate the `cloudPubSubTopic` and return errors on a
 * best effort basis, it is the caller's responsibility to ensure that it
 * exists and that Classroom has permission to publish to it.
 *
 * This method may return the following error codes:
 *
 * * `PERMISSION_DENIED` if:
 *     * the authenticated user does not have permission to receive
 *       notifications from the requested field; or
 *     * the credential provided does not include the appropriate scope for
 *       the requested feed.
 *     * another access error is encountered.
 * * `INVALID_ARGUMENT` if:
 *     * no `cloudPubsubTopic` is specified, or the specified
 *       `cloudPubsubTopic` is not valid; or
 *     * no `feed` is specified, or the specified `feed` is not valid.
 * * `NOT_FOUND` if:
 *     * the specified `feed` cannot be located, or the requesting user does
 *       not have permission to determine whether or not it exists; or
 *     * the specified `cloudPubsubTopic` cannot be located, or Classroom has
 *       not been granted permission to publish to it.
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
    scopes: ['https://www.googleapis.com/auth/classroom.push-notifications'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await classroom.registrations.create({
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
