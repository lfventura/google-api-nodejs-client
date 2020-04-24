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
const manufacturers = google.manufacturers('v1');

/*
 * Inserts or updates the attributes of the product in a Manufacturer Center
 * account.
 *
 * Creates a product with the provided attributes. If the product already
 * exists, then all attributes are replaced with the new ones. The checks at
 * upload time are minimal. All required attributes need to be present for a
 * product to be valid. Issues may show up later after the API has accepted a
 * new upload for a product and it is possible to overwrite an existing valid
 * product with an invalid product. To detect this, you should retrieve the
 * product and check it for issues once the new version is available.
 *
 * Uploaded attributes first need to be processed before they can be
 * retrieved. Until then, new products will be unavailable, and retrieval
 * of previously uploaded products will return the original state of the
 * product.
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
    scopes: ['https://www.googleapis.com/auth/manufacturercenter'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await manufacturers.accounts.products.update({
    // Name in the format `{target_country}:{content_language}:{product_id}`.  `target_country`   - The target country of the product as a CLDR territory                      code (for example, US).  `content_language` - The content language of the product as a two-letter                      ISO 639-1 language code (for example, en).  `product_id`     -   The ID of the product. For more information, see                      https://support.google.com/manufacturers/answer/6124116#id.
    name: '[^/]+',
    // Parent ID in the format `accounts/{account_id}`.  `account_id` - The ID of the Manufacturer Center account.
    parent: 'accounts/[^/]+',

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
