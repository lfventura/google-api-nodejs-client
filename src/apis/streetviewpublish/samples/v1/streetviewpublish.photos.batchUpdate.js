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
const streetviewpublish = google.streetviewpublish('v1');

/*
 * Updates the metadata of Photos, such
 * as pose, place association, connections, etc. Changing the pixels of photos
 * is not supported.
 *
 * Note that if
 * BatchUpdatePhotos
 * fails, either critical fields are missing or there is an authentication
 * error. Even if
 * BatchUpdatePhotos
 * succeeds, individual photos in the batch may have failures.
 * These failures are specified in each
 * PhotoResponse.status
 * in
 * BatchUpdatePhotosResponse.results.
 * See
 * UpdatePhoto
 * for specific failures that can occur per photo.
 *
 * Only the fields specified in
 * updateMask
 * field are used. If `updateMask` is not present, the update applies to all
 * fields.
 *
 * The number of
 * UpdatePhotoRequest
 * messages in a
 * BatchUpdatePhotosRequest
 * must not exceed 20.
 *
 * <aside class="note"><b>Note:</b> To update
 * Pose.altitude,
 * Pose.latLngPair has to be
 * filled as well. Otherwise, the request will fail.</aside>
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
    scopes: ['https://www.googleapis.com/auth/streetviewpublish'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await streetviewpublish.photos.batchUpdate({
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
