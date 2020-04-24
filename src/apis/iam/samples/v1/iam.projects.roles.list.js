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
 * Lists the Roles defined on a resource.
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
  const res = await iam.projects.roles.list({
    // Optional limit on the number of roles to include in the response.
    pageSize: 'placeholder-value',
    // Optional pagination token returned in an earlier ListRolesResponse.
    pageToken: 'placeholder-value',
    // The `parent` parameter's value depends on the target resource for the request, namely [`roles`](/iam/reference/rest/v1/roles), [`projects`](/iam/reference/rest/v1/projects.roles), or [`organizations`](/iam/reference/rest/v1/organizations.roles). Each resource type's `parent` value format is described below:  * [`roles.list()`](/iam/reference/rest/v1/roles/list): An empty string.   This method doesn't require a resource; it simply returns all   [predefined roles](/iam/docs/understanding-roles#predefined_roles) in   Cloud IAM. Example request URL:   `https://iam.googleapis.com/v1/roles`  * [`projects.roles.list()`](/iam/reference/rest/v1/projects.roles/list):   `projects/{PROJECT_ID}`. This method lists all project-level   [custom roles](/iam/docs/understanding-custom-roles).   Example request URL:   `https://iam.googleapis.com/v1/projects/{PROJECT_ID}/roles`  * [`organizations.roles.list()`](/iam/reference/rest/v1/organizations.roles/list):   `organizations/{ORGANIZATION_ID}`. This method lists all   organization-level [custom roles](/iam/docs/understanding-custom-roles).   Example request URL:   `https://iam.googleapis.com/v1/organizations/{ORGANIZATION_ID}/roles`  Note: Wildcard (*) values are invalid; you must specify a complete project ID or organization ID.
    parent: 'projects/my-project',
    // Include Roles that have been deleted.
    showDeleted: 'placeholder-value',
    // Optional view for the returned Role objects. When `FULL` is specified, the `includedPermissions` field is returned, which includes a list of all permissions in the role. The default value is `BASIC`, which does not return the `includedPermissions` field.
    view: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
