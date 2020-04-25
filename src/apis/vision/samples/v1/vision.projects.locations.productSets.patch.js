// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*! THIS FILE IS AUTO-GENERATED */

/*
 * vision.projects.locations.productSets.patch
 * Makes changes to a ProductSet resource.
 * Only display_name can be updated currently.
 * 
 * Possible errors:
 * 
 * * Returns NOT_FOUND if the ProductSet does not exist.
 * * Returns INVALID_ARGUMENT if display_name is present in update_mask but
 *   missing from the request or longer than 4096 characters.
 * Before running the sample, please make sure to run:
 *   $ npm install googleapis
 */

const {google} = require('googleapis');
const vision = google.vision('v1');

async function main() {
  // By default, this method will look for, in order:
  // 1. An environment variable set to `GOOGLE_APPLICATION_CREDENTIALS`
  //    pointing to a service account credential file.
  // 2. A GCE metadata server, present in Google Cloud products like
  //    Compute Engine, Kubernetes Engine, Cloud Run, etc.
  // 3. A local OAuth token written by the Cloud SDK, obtained by running
  //    `gcloud auth application-default login`. This is preferred for local
  //    development.
  const auth = new google.auth.GoogleAuth({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/cloud-vision',
          ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await vision.projects.locations.productSets.patch({
             // The resource name of the ProductSet.
// 
// Format is:
// `projects/PROJECT_ID/locations/LOC_ID/productSets/PRODUCT_SET_ID`.
// 
// This field is ignored when creating a ProductSet.    
    name: 'projects/my-project/locations/my-location/productSets/my-productSet',
         // The FieldMask that specifies which fields to
// update.
// If update_mask isn't specified, all mutable fields are to be updated.
// Valid mask path is `display_name`.    
    updateMask: 'placeholder-value',
            
    // Request body metadata
    requestBody: {
      // request body parameters
      // {
  //   "indexTime": "my_indexTime",
  //   "indexError": {},
  //   "name": "my_name",
  //   "displayName": "my_displayName"
  // }
    },
        
  });
  console.log(res.data);

    // Example response
  // {
  //   "indexTime": "my_indexTime",
  //   "indexError": {},
  //   "name": "my_name",
  //   "displayName": "my_displayName"
  // }
  }

main().catch(e => {
  console.error(e);
  throw e;
});
