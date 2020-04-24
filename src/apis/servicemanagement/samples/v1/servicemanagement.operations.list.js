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
const servicemanagement = google.servicemanagement('v1');

/*
 * Lists service operations that match the specified filter in the request.
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
      'https://www.googleapis.com/auth/service.management',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await servicemanagement.operations.list({
    // A string for filtering Operations.   The following filter fields are supported&#58;    * serviceName&#58; Required. Only `=` operator is allowed.   * startTime&#58; The time this job was started, in ISO 8601 format.     Allowed operators are `>=`,  `>`, `<=`, and `<`.   * status&#58; Can be `done`, `in_progress`, or `failed`. Allowed     operators are `=`, and `!=`.    Filter expression supports conjunction (AND) and disjunction (OR)   logical operators. However, the serviceName restriction must be at the   top-level and can only be combined with other restrictions via the AND   logical operator.    Examples&#58;    * `serviceName={some-service}.googleapis.com`   * `serviceName={some-service}.googleapis.com AND startTime>="2017-02-01"`   * `serviceName={some-service}.googleapis.com AND status=done`   * `serviceName={some-service}.googleapis.com AND (status=done OR startTime>="2017-02-01")`
    filter: 'placeholder-value',
    // Not used.
    name: 'placeholder-value',
    // The maximum number of operations to return. If unspecified, defaults to 50. The maximum value is 100.
    pageSize: 'placeholder-value',
    // The standard list page token.
    pageToken: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
