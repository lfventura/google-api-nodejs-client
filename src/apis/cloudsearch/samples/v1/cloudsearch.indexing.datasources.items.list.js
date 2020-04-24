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
 * Lists all or a subset of Item resources.
 *
 * This API requires an admin or service account to execute. The service
 * account used is the one whitelisted in the corresponding data source.
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
  const res = await cloudsearch.indexing.datasources.items.list({
    // When set to true, the indexing system only populates the following fields: name, version, queue. metadata.hash, metadata.title, metadata.sourceRepositoryURL, metadata.objectType, metadata.createTime, metadata.updateTime, metadata.contentLanguage, metadata.mimeType, structured_data.hash, content.hash, itemType, itemStatus.code, itemStatus.processingError.code, itemStatus.repositoryError.type, <br />If this value is false, then all the fields are populated in Item.
    brief: 'placeholder-value',
    // Name of connector making this call. <br />Format: datasources/{source_id}/connectors/{ID}
    connectorName: 'placeholder-value',
    // If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
    'debugOptions.enableDebugging': 'placeholder-value',
    // Name of the Data Source to list Items.  Format: datasources/{source_id}
    name: 'datasources/[^/]+',
    // Maximum number of items to fetch in a request. The max value is 1000 when brief is true.  The max value is 10 if brief is false. <br />The default value is 10
    pageSize: 'placeholder-value',
    // The next_page_token value returned from a previous List request, if any.
    pageToken: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
