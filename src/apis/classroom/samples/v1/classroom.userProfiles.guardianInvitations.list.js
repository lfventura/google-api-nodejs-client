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
 * Returns a list of guardian invitations that the requesting user is
 * permitted to view, filtered by the parameters provided.
 *
 * This method returns the following error codes:
 *
 * * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting
 *   user is not permitted to view guardian invitations for that student, if
 *   `"-"` is specified as the `student_id` and the user is not a domain
 *   administrator, if guardians are not enabled for the domain in question,
 *   or for other access errors.
 * * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
 *   be recognized (it is not an email address, nor a `student_id` from the
 *   API, nor the literal string `me`). May also be returned if an invalid
 *   `page_token` or `state` is provided.
 * * `NOT_FOUND` if a `student_id` is specified, and its format can be
 *   recognized, but Classroom has no record of that student.
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
      'https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await classroom.userProfiles.guardianInvitations.list({
    // If specified, only results with the specified `invited_email_address` are returned.
    invitedEmailAddress: 'placeholder-value',
    // Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum.  The server may return fewer than the specified number of results.
    pageSize: 'placeholder-value',
    // nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned.  The list request must be otherwise identical to the one that resulted in this token.
    pageToken: 'placeholder-value',
    // If specified, only results with the specified `state` values are returned. Otherwise, results with a `state` of `PENDING` are returned.
    states: 'placeholder-value',
    // The ID of the student whose guardian invitations are to be returned. The identifier can be one of the following:  * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user * the string literal `"-"`, indicating that results should be returned for   all students that the requesting user is permitted to view guardian   invitations.
    studentId: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
