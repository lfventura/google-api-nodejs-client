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
const licensing = google.licensing('v1');

/*
 * List all users assigned licenses for a specific product SKU.
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
    scopes: ['https://www.googleapis.com/auth/apps.licensing'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await licensing.licenseAssignments.listForProduct({
    // Customer's customerId. A previous version of this API accepted the primary domain name as a value for this field. If the customer is suspended, the server returns an error.
    customerId: 'placeholder-value',
    // The maxResults query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
    maxResults: 'placeholder-value',
    // Token to fetch the next page of data. The maxResults query string is related to the pageToken since maxResults determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
    pageToken: 'placeholder-value',
    // A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
    productId: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
