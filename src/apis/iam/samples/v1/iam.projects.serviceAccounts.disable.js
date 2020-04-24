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
 * DisableServiceAccount is currently in the alpha launch stage.
 *
 * Disables a ServiceAccount,
 * which immediately prevents the service account from authenticating and
 * gaining access to APIs.
 *
 * Disabled service accounts can be safely restored by using
 * EnableServiceAccount at any point. Deleted service accounts cannot be
 * restored using this method.
 *
 * Disabling a service account that is bound to VMs, Apps, Functions, or
 * other jobs will cause those jobs to lose access to resources if they are
 * using the disabled service account.
 *
 * To improve reliability of your services and avoid unexpected outages, it
 * is recommended to first disable a service account rather than delete it.
 * After disabling the service account, wait at least 24 hours to verify there
 * are no unintended consequences, and then delete the service account.
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
  const res = await iam.projects.serviceAccounts.disable({
    // The resource name of the service account in the following format: `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`. Using `-` as a wildcard for the `PROJECT_ID` will infer the project from the account. The `ACCOUNT` value can be the `email` address or the `unique_id` of the service account.
    name: 'projects/my-project/serviceAccounts/[^/]+',

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
