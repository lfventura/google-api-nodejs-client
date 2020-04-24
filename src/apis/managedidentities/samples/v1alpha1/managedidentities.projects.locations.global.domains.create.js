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
const managedidentities = google.managedidentities('v1alpha1');

/*
 * Creates a Microsoft AD Domain in a given project.
 * Operation<response: google.protobuf.Empty>
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
  const res = await managedidentities.projects.locations.global.domains.create({
    // The fully qualified domain name. e.g. mydomain.myorganization.com, with the following restrictions:   * Must contain only lowercase letters, numbers, periods and hyphens.  * Must start with a letter.  * Must contain between 2-64 characters.  * Must end with a number or a letter.  * Must not start with period.  * Must be unique within the project.  * First segement length (mydomain form example above) shouldn't exceed    15 chars.  * The last segment cannot be fully numeric.
    domainName: 'placeholder-value',
    // Resource project name and location using the form: `projects/{project_id}/locations/global`
    parent: 'projects/my-project/locations/global',

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
