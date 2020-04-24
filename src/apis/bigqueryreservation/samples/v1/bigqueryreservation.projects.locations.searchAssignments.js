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
const bigqueryreservation = google.bigqueryreservation('v1');

/*
 * Looks up assignments for a specified resource for a particular region.
 * If the request is about a project:
 *   1) Assignments created on the project will be returned if they exist.
 *   2) Otherwise assignments created on the closest ancestor will be
 *   returned. 3) Assignments for different JobTypes will all be returned.
 * Same logic applies if the request is about a folder.
 * If the request is about an organization, then assignments created on the
 * organization will be returned (organization doesn't have ancestors).
 * Comparing to ListAssignments, there are some behavior
 * differences:
 *   1) permission on the assignee will be verified in this API.
 *   2) Hierarchy lookup (project->folder->organization) happens in this API.
 *   3) Parent here is projects/x/locations/x, instead of
 *   projects/x/locations/xreservations/x.
 * Note "-" cannot be used for projects
 * nor locations.
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
      'https://www.googleapis.com/auth/bigquery',
      'https://www.googleapis.com/auth/cloud-platform',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await bigqueryreservation.projects.locations.searchAssignments({
    // The maximum number of items to return.
    pageSize: 'placeholder-value',
    // The next_page_token value returned from a previous List request, if any.
    pageToken: 'placeholder-value',
    // Required. The resource name of the admin project(containing project and location), e.g.:   "projects/myproject/locations/US".
    parent: 'projects/my-project/locations/my-location',
    // Please specify resource name as assignee in the query. e.g., "assignee=projects/myproject"       "assignee=folders/123"       "assignee=organizations/456"
    query: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
