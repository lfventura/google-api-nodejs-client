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
const servicecontrol = google.servicecontrol('v1');

/*
 * Checks whether an operation on a service should be allowed to proceed
 * based on the configuration of the service and related policies. It must be
 * called before the operation is executed.
 *
 * If feasible, the client should cache the check results and reuse them for
 * 60 seconds. In case of any server errors, the client should rely on the
 * cached results for much longer time to avoid outage.
 * WARNING: There is general 60s delay for the configuration and policy
 * propagation, therefore callers MUST NOT depend on the `Check` method having
 * the latest policy information.
 *
 * NOTE: the CheckRequest has the size limit of 64KB.
 *
 * This method requires the `servicemanagement.services.check` permission
 * on the specified service. For more information, see
 * [Cloud IAM](https://cloud.google.com/iam).
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
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/servicecontrol',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await servicecontrol.services.check({
    // The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`.  See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
    serviceName: 'placeholder-value',

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
