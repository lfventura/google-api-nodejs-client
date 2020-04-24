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
const containeranalysis = google.containeranalysis('v1alpha1');

/*
 * Sets the access control policy on the specified `Note` or `Occurrence`.
 * Requires `containeranalysis.notes.setIamPolicy` or
 * `containeranalysis.occurrences.setIamPolicy` permission if the resource is
 * a `Note` or an `Occurrence`, respectively.
 * Attempting to call this method without these permissions will result in a `
 * `PERMISSION_DENIED` error.
 * Attempting to call this method on a non-existent resource will result in a
 * `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission
 * on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or
 * a `PERMISSION_DENIED` error otherwise. The resource takes the following
 * formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences
 * and projects/{projectid}/notes/{noteid} for notes
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
  const res = await containeranalysis.projects.occurrences.setIamPolicy({
    // REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
    resource: 'projects/my-project/occurrences/[^/]+',

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
