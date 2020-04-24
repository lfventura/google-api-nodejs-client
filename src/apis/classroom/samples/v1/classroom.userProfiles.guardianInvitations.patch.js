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
 * Modifies a guardian invitation.
 *
 * Currently, the only valid modification is to change the `state` from
 * `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation.
 *
 * This method returns the following error codes:
 *
 * * `PERMISSION_DENIED` if the current user does not have permission to
 *   manage guardians, if guardians are not enabled for the domain in question
 *   or for other access errors.
 * * `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state.
 * * `INVALID_ARGUMENT` if the format of the student ID provided
 *   cannot be recognized (it is not an email address, nor a `user_id` from
 *   this API), or if the passed `GuardianInvitation` has a `state` other than
 *   `COMPLETE`, or if it modifies fields other than `state`.
 * * `NOT_FOUND` if the student ID provided is a valid student ID, but
 *   Classroom has no record of that student, or if the `id` field does not
 *   refer to a guardian invitation known to Classroom.
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
      'https://www.googleapis.com/auth/classroom.guardianlinks.students',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await classroom.userProfiles.guardianInvitations.patch({
    // The `id` field of the `GuardianInvitation` to be modified.
    invitationId: 'placeholder-value',
    // The ID of the student whose guardian invitation is to be modified.
    studentId: 'placeholder-value',
    // Mask that identifies which fields on the course to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields are valid:  * `state`  When set in a query parameter, this field should be specified as  `updateMask=<field1>,<field2>,...`
    updateMask: 'placeholder-value',

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
