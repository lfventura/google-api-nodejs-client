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
 * After the client finishes uploading the photo with the returned
 * UploadRef,
 * CreatePhoto
 * publishes the uploaded Photo to
 * Street View on Google Maps.
 *
 * Currently, the only way to set heading, pitch, and roll in CreatePhoto is
 * through the [Photo Sphere XMP
 * metadata](https://developers.google.com/streetview/spherical-metadata) in
 * the photo bytes. CreatePhoto ignores the  `pose.heading`, `pose.pitch`,
 * `pose.roll`, `pose.altitude`, and `pose.level` fields in Pose.
 *
 * This method returns the following error codes:
 *
 * * google.rpc.Code.INVALID_ARGUMENT if the request is malformed or if
 * the uploaded photo is not a 360 photo.
 * * google.rpc.Code.NOT_FOUND if the upload reference does not exist.
 * * google.rpc.Code.RESOURCE_EXHAUSTED if the account has reached the
 * storage limit.
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
  const res = await streetviewpublish.photo.create({
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
