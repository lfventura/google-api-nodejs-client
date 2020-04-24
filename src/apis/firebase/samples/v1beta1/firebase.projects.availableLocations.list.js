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
const firebase = google.firebase('v1beta1');

/*
 * Returns a list of valid Google Cloud Platform (GCP) resource locations for
 * the specified Project (including a FirebaseProject).
 * <br>
 * <br>One of these locations can be selected as the Project's [_default_ GCP
 * resource location](https://firebase.google.com/docs/projects/locations),
 * which is the geographical location where project resources, such as Cloud
 * Firestore, will be provisioned by default. However, if the default GCP
 * resource location has already been set for the Project, then this setting
 * cannot be changed.
 * <br>
 * <br>This call checks for any possible
 * [location
 * restrictions](https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations)
 * for the specified Project and, thus, might return a subset of all possible
 * GCP resource locations. To list all GCP resource locations (regardless of
 * any restrictions), call the endpoint without specifying a `projectId` (that
 * is, `/v1beta1/{parent=projects/-}/listAvailableLocations`).
 * <br>
 * <br>To call `ListAvailableLocations` with a specified project, a member
 * must be at minimum a Viewer of the project. Calls without a specified
 * project do not require any specific project permissions.
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
      'https://www.googleapis.com/auth/firebase',
      'https://www.googleapis.com/auth/firebase.readonly',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await firebase.projects.availableLocations.list({
    // The maximum number of locations to return in the response. <br> <br>The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit. <br> <br>This value cannot be negative.
    pageSize: 'placeholder-value',
    // Token returned from a previous call to `ListAvailableLocations` indicating where in the list of locations to resume listing.
    pageToken: 'placeholder-value',
    // The Project for which to list GCP resource locations, in the format: <br><code>projects/<var>projectId</var></code> <br>If no project is specified (that is, `projects/-`), the returned list does not take into account org-specific or project-specific location restrictions.
    parent: 'projects/my-project',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
