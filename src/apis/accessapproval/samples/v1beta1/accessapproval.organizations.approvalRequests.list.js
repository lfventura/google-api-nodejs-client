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
const accessapproval = google.accessapproval('v1beta1');

/*
 * Lists approval requests associated with a project, folder, or organization.
 * Approval requests can be filtered by state (pending, active, dismissed).
 * The order is reverse chronological.
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
  const res = await accessapproval.organizations.approvalRequests.list({
    // A filter on the type of approval requests to retrieve. Must be one of the following values: <ol>   <li>[not set]: Requests that are pending or have active approvals.</li>   <li>ALL: All requests.</li>   <li>PENDING: Only pending requests.</li>   <li>ACTIVE: Only active (i.e. currently approved) requests.</li>   <li>DISMISSED: Only dismissed (including expired) requests.</li> </ol>
    filter: 'placeholder-value',
    // Requested page size.
    pageSize: 'placeholder-value',
    // A token identifying the page of results to return.
    pageToken: 'placeholder-value',
    // The parent resource. This may be "projects/{project_id}", "folders/{folder_id}", or "organizations/{organization_id}".
    parent: 'organizations/[^/]+',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
