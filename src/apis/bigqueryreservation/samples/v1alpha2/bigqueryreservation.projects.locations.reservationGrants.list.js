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
const bigqueryreservation = google.bigqueryreservation('v1alpha2');

/*
 * Lists reservation grants.
 * Only explicitly created grants will be returned. E.g:
 * organizationA contains project1 and project2. Reservation res1 exists.
 * CreateReservationGrant was invoked previously and following grants were
 * created explicitly:
 *   <organizationA, res1>
 *   <project1, res1>
 * Then this API will just return the above two grants for reservation res1,
 * and no expansion/merge will happen.
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
  const res = await bigqueryreservation.projects.locations.reservationGrants.list(
    {
      // The maximum number of items to return.
      pageSize: 'placeholder-value',
      // The next_page_token value returned from a previous List request, if any.
      pageToken: 'placeholder-value',
      // The parent resource name e.g.: projects/myproject/location/eu.
      parent: 'projects/my-project/locations/my-location',
    }
  );
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
