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
 * Creates an upload session to start uploading photo bytes.  The method uses
 * the upload URL of the returned
 * UploadRef to upload the bytes for
 * the Photo.
 *
 * In addition to the photo requirements shown in
 * https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604,
 * the photo must meet the following requirements:
 *
 * * Photo Sphere XMP metadata must be included in the photo metadata. See
 * https://developers.google.com/streetview/spherical-metadata for the
 * required fields.
 * * The pixel size of the photo must meet the size requirements listed in
 * https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604, and
 * the photo must be a full 360 horizontally.
 *
 * After the upload completes, the method uses
 * UploadRef with
 * CreatePhoto
 * to create the Photo object entry.
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
  const res = await streetviewpublish.photo.startUpload({
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
