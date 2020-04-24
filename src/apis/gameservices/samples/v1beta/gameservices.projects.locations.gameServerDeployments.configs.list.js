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
const gameservices = google.gameservices('v1beta');

/*
 * Lists Game Server Configs in a given project, Location, and Game Server
 * Deployment.
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
  const res = await gameservices.projects.locations.gameServerDeployments.configs.list(
    {
      // Optional. The filter to apply to list results.
      filter: 'placeholder-value',
      // Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
      orderBy: 'placeholder-value',
      // Optional. The maximum number of items to return.  If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more GameServerConfigs left to be queried.
      pageSize: 'placeholder-value',
      // Optional. The next_page_token value returned from a previous List request, if any.
      pageToken: 'placeholder-value',
      // Required. The parent resource name. Uses the form:  `projects/{project}/locations/{location}/gameServerDeployments/{deployment}/configs/x`.
      parent:
        'projects/my-project/locations/my-location/gameServerDeployments/[^/]+',
    }
  );
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
