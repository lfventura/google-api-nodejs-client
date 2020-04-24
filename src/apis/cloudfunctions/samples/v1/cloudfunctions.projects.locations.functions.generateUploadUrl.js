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
const cloudfunctions = google.cloudfunctions('v1');

/*
 * Returns a signed URL for uploading a function source code.
 * For more information about the signed URL usage see:
 * https://cloud.google.com/storage/docs/access-control/signed-urls.
 * Once the function source code upload is complete, the used signed
 * URL should be provided in CreateFunction or UpdateFunction request
 * as a reference to the function source code.
 *
 * When uploading source code to the generated signed URL, please follow
 * these restrictions:
 *
 * * Source file type should be a zip file.
 * * Source file size should not exceed 100MB limit.
 * * No credentials should be attached - the signed URLs provide access to the
 *   target bucket using internal service identity; if credentials were
 *   attached, the identity from the credentials would be used, but that
 *   identity does not have permissions to upload files to the URL.
 *
 * When making a HTTP PUT request, these two headers need to be specified:
 *
 * * `content-type: application/zip`
 * * `x-goog-content-length-range: 0,104857600`
 *
 * And this header SHOULD NOT be specified:
 *
 * * `Authorization: Bearer YOUR_TOKEN`
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
  const res = await cloudfunctions.projects.locations.functions.generateUploadUrl(
    {
      // The project and location in which the Google Cloud Storage signed URL should be generated, specified in the format `projects/x/locations/x`.
      parent: 'projects/my-project/locations/my-location',

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
