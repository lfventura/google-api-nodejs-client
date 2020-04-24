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
const datacatalog = google.datacatalog('v1beta1');

/*
 * Get an entry by target resource name. This method allows clients to use
 * the resource name from the source Google Cloud Platform service to get the
 * Data Catalog Entry.
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
  const res = await datacatalog.entries.lookup({
    // The full name of the Google Cloud Platform resource the Data Catalog entry represents. See: https://cloud.google.com/apis/design/resource_names#full_resource_name. Full names are case-sensitive.  Examples:   * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId  * //pubsub.googleapis.com/projects/projectId/topics/topicId
    linkedResource: 'placeholder-value',
    // The SQL name of the entry. SQL names are case-sensitive.  Examples:    * `pubsub.project_id.topic_id`   * ``pubsub.project_id.`topic.id.with.dots` ``   * `bigquery.table.project_id.dataset_id.table_id`   * `bigquery.dataset.project_id.dataset_id`   * `datacatalog.entry.project_id.location_id.entry_group_id.entry_id`  `*_id`s shoud satisfy the standard SQL rules for identifiers. https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical.
    sqlResource: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
