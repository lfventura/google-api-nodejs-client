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
const bigqueryreservation = google.bigqueryreservation('v1');

/*
 * Creates an object which allows the given project to submit jobs
 * of a certain type using slots from the specified reservation. Currently a
 * resource (project, folder, organization) can only have one assignment per
 * {job_type, location}, and that reservation will be used for all jobs of the
 * matching type. Within the organization, different assignments can be
 * created on projects, folders or organization level. During query execution,
 * the assignment is looked up at the project, folder and organization levels
 * in that order. The first assignment found is applied to the query. When
 * creating assignments, it does not matter if other assignments exist at
 * higher levels. E.g: organizationA contains project1, project2. Assignments
 * for organizationA, project1 and project2 could all be created, mapping to
 * the same or different reservations.
 * Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have
 * 'bigquery.admin' permissions on the project using the reservation
 * and the project that owns this reservation.
 * Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment
 * does not match location of the reservation.
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
  const res = await bigqueryreservation.projects.locations.reservations.assignments.create(
    {
      // Required. The parent resource name of the assignment E.g.: projects/myproject/locations/US/reservations/team1-prod
      parent: 'projects/my-project/locations/my-location/reservations/[^/]+',

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
