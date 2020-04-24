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
const serviceusage = google.serviceusage('v1');

/*
 * List all services available to the specified project, and the current
 * state of those services with respect to the project. The list includes
 * all public services, all services for which the calling user has the
 * `servicemanagement.services.bind` permission, and all services that have
 * already been enabled on the project. The list can be filtered to
 * only include services in a specific state, for example to only include
 * services enabled on the project.
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
      'https://www.googleapis.com/auth/cloud-platform.read-only',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await serviceusage.services.list({
    // Only list services that conform to the given filter. The allowed filter strings are `state:ENABLED` and `state:DISABLED`.
    filter: 'placeholder-value',
    // Requested size of the next page of data. Requested page size cannot exceed 200.  If not set, the default page size is 50.
    pageSize: 'placeholder-value',
    // Token identifying which result to start with, which is returned by a previous list call.
    pageToken: 'placeholder-value',
    // Parent to search for services on.  An example name would be: `projects/123` where `123` is the project number.
    parent: '[^/]+/[^/]+',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
