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
const serviceconsumermanagement = google.serviceconsumermanagement('v1');

/*
 * Attach an existing project to the tenancy unit as a new tenant
 * resource. The project could either be the tenant project reserved by
 * calling `AddTenantProject` under a tenancy unit of a service producer's
 * project of a managed service, or from a separate project.
 * The caller is checked against a set of permissions as if calling
 * `AddTenantProject` on the same service consumer.
 * To trigger the attachment, the targeted tenant project must be in a
 * folder. Make sure the ServiceConsumerManagement service account is
 * the owner of that project. These two requirements are already met
 * if the project is reserved by calling `AddTenantProject`.
 * Operation<response: Empty>.
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
  const res = await serviceconsumermanagement.services.tenancyUnits.attachProject(
    {
      // Name of the tenancy unit that the project will be attached to. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
      name: 'services/[^/]+/[^/]+/[^/]+/tenancyUnits/[^/]+',

      // Request body metadata
      requestBody: {
        // request body parameters
      },
    }
  );
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
