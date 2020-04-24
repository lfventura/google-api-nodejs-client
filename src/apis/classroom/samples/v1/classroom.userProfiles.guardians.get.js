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
 * Returns a specific guardian.
 *
 * This method returns the following error codes:
 *
 * * `PERMISSION_DENIED` if no user that matches the provided `student_id`
 *   is visible to the requesting user, if the requesting user is not
 *   permitted to view guardian information for the student identified by the
 *   `student_id`, if guardians are not enabled for the domain in question,
 *   or for other access errors.
 * * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
 *   be recognized (it is not an email address, nor a `student_id` from the
 *   API, nor the literal string `me`).
 * * `NOT_FOUND` if the requesting user is permitted to view guardians for
 *   the requested `student_id`, but no `Guardian` record exists for that
 *   student that matches the provided `guardian_id`.
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
      'https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly',
      'https://www.googleapis.com/auth/classroom.guardianlinks.students',
      'https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await classroom.userProfiles.guardians.get({
    // The `id` field from a `Guardian`.
    guardianId: 'placeholder-value',
    // The student whose guardian is being requested. One of the following:  * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
    studentId: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
