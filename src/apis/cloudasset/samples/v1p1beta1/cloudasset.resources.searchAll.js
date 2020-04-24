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
const cloudasset = google.cloudasset('v1p1beta1');

/*
 * Searches all the resources under a given accessible CRM scope
 * (project/folder/organization). This RPC gives callers
 * especially admins the ability to search all the resources under a scope,
 * even if they don't have .get permission of all the resources. Callers
 * should have cloud.assets.SearchAllResources permission on the requested
 * scope, otherwise it will be rejected.
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
  const res = await cloudasset.resources.searchAll({
    // Optional. A list of asset types that this request searches for. If empty, it will search all the supported asset types.
    assetTypes: 'placeholder-value',
    // Optional. A comma separated list of fields specifying the sorting order of the results. The default order is ascending. Add " desc" after the field name to indicate descending order. Redundant space characters are ignored. For example, "  foo ,  bar  desc  ".
    orderBy: 'placeholder-value',
    // Optional. The page size for search result pagination. Page size is capped at 500 even if a larger value is given. If set to zero, server will pick an appropriate default. Returned results may be fewer than requested. When this happens, there could be more results as long as `next_page_token` is returned.
    pageSize: 'placeholder-value',
    // Optional. If present, then retrieve the next batch of results from the preceding call to this method.  `page_token` must be the value of `next_page_token` from the previous response. The values of all other method parameters, must be identical to those in the previous call.
    pageToken: 'placeholder-value',
    // Optional. The query statement.
    query: 'placeholder-value',
    // Required. The relative name of an asset. The search is limited to the resources within the `scope`. The allowed value must be: * Organization number (such as "organizations/123") * Folder number(such as "folders/1234") * Project number (such as "projects/12345") * Project id (such as "projects/abc")
    scope: '[^/]+/[^/]+',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
