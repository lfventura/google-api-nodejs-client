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
const iam = google.iam('v1');

/*
 * Soft deletes a role. The role is suspended and cannot be used to create new
 * IAM Policy Bindings.
 * The Role will not be included in `ListRoles()` unless `show_deleted` is set
 * in the `ListRolesRequest`. The Role contains the deleted boolean set.
 * Existing Bindings remains, but are inactive. The Role can be undeleted
 * within 7 days. After 7 days the Role is deleted and all Bindings associated
 * with the role are removed.
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
  const res = await iam.projects.roles.delete({
    // Used to perform a consistent read-modify-write.
    etag: 'placeholder-value',
    // The `name` parameter's value depends on the target resource for the request, namely [`projects`](/iam/reference/rest/v1/projects.roles) or [`organizations`](/iam/reference/rest/v1/organizations.roles). Each resource type's `name` value format is described below:  * [`projects.roles.delete()`](/iam/reference/rest/v1/projects.roles/delete):   `projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`. This method deletes only   [custom roles](/iam/docs/understanding-custom-roles) that have been   created at the project level. Example request URL:   `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles/{CUSTOM_ROLE_ID}`  * [`organizations.roles.delete()`](/iam/reference/rest/v1/organizations.roles/delete):   `organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`. This method   deletes only [custom roles](/iam/docs/understanding-custom-roles) that   have been created at the organization level. Example request URL:   `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles/{CUSTOM_ROLE_ID}`  Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
    name: 'projects/my-project/roles/[^/]+',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
