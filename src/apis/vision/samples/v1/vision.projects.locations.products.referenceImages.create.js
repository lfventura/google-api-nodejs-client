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
const vision = google.vision('v1');

/*
 * Creates and returns a new ReferenceImage resource.
 * 
 * The `bounding_poly` field is optional. If `bounding_poly` is not specified,
 * the system will try to detect regions of interest in the image that are
 * compatible with the product_category on the parent product. If it is
 * specified, detection is ALWAYS skipped. The system converts polygons into
 * non-rotated rectangles.
 * 
 * Note that the pipeline will resize the image if the image resolution is too
 * large to process (above 50MP).
 * 
 * Possible errors:
 * 
 * * Returns INVALID_ARGUMENT if the image_uri is missing or longer than 4096
 *   characters.
 * * Returns INVALID_ARGUMENT if the product does not exist.
 * * Returns INVALID_ARGUMENT if bounding_poly is not provided, and nothing
 *   compatible with the parent product's product_category is detected.
 * * Returns INVALID_ARGUMENT if bounding_poly contains more than 10 polygons.
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
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/cloud-vision',
          ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await vision.projects.locations.products.referenceImages.create({
             // Required. Resource name of the product in which to create the reference image.
// 
// Format is
// `projects/PROJECT_ID/locations/LOC_ID/products/PRODUCT_ID`.    
    parent: 'projects/my-project/locations/my-location/products/my-product',
         // A user-supplied resource id for the ReferenceImage to be added. If set,
// the server will attempt to use this value as the resource id. If it is
// already in use, an error is returned with code ALREADY_EXISTS. Must be at
// most 128 characters long. It cannot contain the character `/`.    
    referenceImageId: 'placeholder-value',
            
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
