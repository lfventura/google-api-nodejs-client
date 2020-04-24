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
 * Sets the Cloud IAM access control policy for a
 * ServiceAccount.
 *
 * Note: Service accounts are both
 * [resources and
 * identities](/iam/docs/service-accounts#service_account_permissions). This
 * method treats the service account as a resource. Use it to grant members
 * access to the service account, such as when they need to impersonate it.
 *
 * This method does not grant the service account access to other resources,
 * such as projects. To grant a service account access to resources, include
 * the service account in the Cloud IAM policy for the desired resource, then
 * call the appropriate `setIamPolicy` method on the target resource. For
 * example, to grant a service account access to a project, call the
 * [projects.setIamPolicy](/resource-manager/reference/rest/v1/projects/setIamPolicy)
 * method.
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
  const res = await iam.projects.serviceAccounts.setIamPolicy({
    // REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
    resource: 'projects/my-project/serviceAccounts/[^/]+',

    // Request body metadata
    requestBody: {
      // request body parameters
    },
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
