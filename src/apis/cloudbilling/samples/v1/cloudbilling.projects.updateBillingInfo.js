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
const cloudbilling = google.cloudbilling('v1');

/*
 * Sets or updates the billing account associated with a project. You specify
 * the new billing account by setting the `billing_account_name` in the
 * `ProjectBillingInfo` resource to the resource name of a billing account.
 * Associating a project with an open billing account enables billing on the
 * project and allows charges for resource usage. If the project already had a
 * billing account, this method changes the billing account used for resource
 * usage charges.
 *
 * *Note:* Incurred charges that have not yet been reported in the transaction
 * history of the GCP Console might be billed to the new billing
 * account, even if the charge occurred before the new billing account was
 * assigned to the project.
 *
 * The current authenticated user must have ownership privileges for both the
 * [project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
 * ) and the [billing
 * account](https://cloud.google.com/billing/docs/how-to/billing-access).
 *
 * You can disable billing on the project by setting the
 * `billing_account_name` field to empty. This action disassociates the
 * current billing account from the project. Any billable activity of your
 * in-use services will stop, and your application could stop functioning as
 * expected. Any unbilled charges to date will be billed to the previously
 * associated account. The current authenticated user must be either an owner
 * of the project or an owner of the billing account for the project.
 *
 * Note that associating a project with a *closed* billing account will have
 * much the same effect as disabling billing on the project: any paid
 * resources used by the project will be shut down. Thus, unless you wish to
 * disable billing, you should always call this method with the name of an
 * *open* billing account.
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
  const res = await cloudbilling.projects.updateBillingInfo({
    // Required. The resource name of the project associated with the billing information that you want to update. For example, `projects/tokyo-rain-123`.
    name: 'projects/my-project',

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
