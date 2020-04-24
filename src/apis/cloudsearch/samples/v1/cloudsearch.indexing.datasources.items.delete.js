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
const cloudsearch = google.cloudsearch('v1');

/*
 * Deletes Item resource for the
 * specified resource name. This API requires an admin or service account
 * to execute. The service account used is the one whitelisted in the
 * corresponding data source.
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
      'https://www.googleapis.com/auth/cloud_search',
      'https://www.googleapis.com/auth/cloud_search.indexing',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await cloudsearch.indexing.datasources.items.delete({
    // Name of connector making this call. <br />Format: datasources/{source_id}/connectors/{ID}
    connectorName: 'placeholder-value',
    // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
    'debugOptions.enableDebugging': 'placeholder-value',
    // Required. The RequestMode for this request.
    mode: 'placeholder-value',
    // Required. Name of the item to delete. Format: datasources/{source_id}/items/{item_id}
    name: 'datasources/[^/]+/items/[^/]+',
    // Required. The incremented version of the item to delete from the index. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. <br /><br /> Cloud Search Indexing won't delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes.
    version: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
