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
const dialogflow = google.dialogflow('v2beta1');

/*
 * Returns the list of agents.
 *
 * Since there is at most one conversational agent per project, this method is
 * useful primarily for listing all agents across projects the caller has
 * access to. One can achieve that with a wildcard project collection id "-".
 * Refer to [List
 * Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
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
      'https://www.googleapis.com/auth/dialogflow',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await dialogflow.projects.agent.search({
    // Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
    pageSize: 'placeholder-value',
    // Optional. The next_page_token value returned from a previous list request.
    pageToken: 'placeholder-value',
    // Required. The project to list agents from. Format: `projects/<Project ID or '-'>`.
    parent: 'projects/my-project',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
