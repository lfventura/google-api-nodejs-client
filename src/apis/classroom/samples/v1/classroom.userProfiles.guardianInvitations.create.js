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
 * Creates a guardian invitation, and sends an email to the guardian asking
 * them to confirm that they are the student's guardian.
 *
 * Once the guardian accepts the invitation, their `state` will change to
 * `COMPLETED` and they will start receiving guardian notifications. A
 * `Guardian` resource will also be created to represent the active guardian.
 *
 * The request object must have the `student_id` and
 * `invited_email_address` fields set. Failing to set these fields, or
 * setting any other fields in the request, will result in an error.
 *
 * This method returns the following error codes:
 *
 * * `PERMISSION_DENIED` if the current user does not have permission to
 *   manage guardians, if the guardian in question has already rejected
 *   too many requests for that student, if guardians are not enabled for the
 *   domain in question, or for other access errors.
 * * `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian
 *   link limit.
 * * `INVALID_ARGUMENT` if the guardian email address is not valid (for
 *   example, if it is too long), or if the format of the student ID provided
 *   cannot be recognized (it is not an email address, nor a `user_id` from
 *   this API). This error will also be returned if read-only fields are set,
 *   or if the `state` field is set to to a value other than `PENDING`.
 * * `NOT_FOUND` if the student ID provided is a valid student ID, but
 *   Classroom has no record of that student.
 * * `ALREADY_EXISTS` if there is already a pending guardian invitation for
 *   the student and `invited_email_address` provided, or if the provided
 *   `invited_email_address` matches the Google account of an existing
 *   `Guardian` for this user.
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
  const res = await classroom.userProfiles.guardianInvitations.create({
    // ID of the student (in standard format)
    studentId: 'placeholder-value',

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
