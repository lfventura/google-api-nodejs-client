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
 * Apply a configuration to an existing tenant project.
 * This project must exist in an active state and have the original owner
 * account. The caller must have permission to add a project to the given
 * tenancy unit. The configuration is applied, but any existing settings on
 * the project aren't modified.
 * Specified policy bindings are applied. Existing bindings aren't modified.
 * Specified services are activated. No service is deactivated.
 * If specified, new billing configuration is applied.
 * Omit a billing configuration to keep the existing one.
 * A service account in the project is created if previously non existed.
 * Specified labels will be appended to tenant project, note that the value of
 * existing label key will be updated if the same label key is requested.
 * The specified folder is ignored, as moving a tenant project to a different
 * folder isn't supported.
 * The operation fails if any of the steps fail, but no rollback of already
 * applied configuration changes is attempted.
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
  const res = await serviceconsumermanagement.services.tenancyUnits.applyProjectConfig(
    {
      // Name of the tenancy unit. Such as 'services/service.googleapis.com/projects/12345/tenancyUnits/abcd'.
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
