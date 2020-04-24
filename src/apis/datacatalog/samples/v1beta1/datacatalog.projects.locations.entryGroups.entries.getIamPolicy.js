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
const datacatalog = google.datacatalog('v1beta1');

/*
 * Gets the access control policy for a resource. A `NOT_FOUND` error
 * is returned if the resource does not exist. An empty policy is returned
 * if the resource exists but does not have a policy set on it.
 *
 * Supported resources are:
 *   - Tag templates.
 *   - Entries.
 *   - Entry groups.
 * Note, this method cannot be used to manage policies for BigQuery, Pub/Sub
 * and any external Google Cloud Platform resources synced to Data Catalog.
 *
 * Callers must have following Google IAM permission
 *   - `datacatalog.tagTemplates.getIamPolicy` to get policies on tag
 *     templates.
 *   - `datacatalog.entries.getIamPolicy` to get policies on entries.
 *   - `datacatalog.entryGroups.getIamPolicy` to get policies on entry groups.
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
  const res = await datacatalog.projects.locations.entryGroups.entries.getIamPolicy(
    {
      // REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
      resource:
        'projects/my-project/locations/my-location/entryGroups/[^/]+/entries/[^/]+',

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
