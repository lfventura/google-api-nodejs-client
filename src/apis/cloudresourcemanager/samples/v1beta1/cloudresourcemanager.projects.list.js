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
const cloudresourcemanager = google.cloudresourcemanager('v1beta1');

/*
 * Lists Projects that the caller has the `resourcemanager.projects.get`
 * permission on and satisfy the specified filter.
 *
 * This method returns Projects in an unspecified order.
 * This method is eventually consistent with project mutations; this means
 * that a newly created project may not appear in the results or recent
 * updates to an existing project may not be reflected in the results. To
 * retrieve the latest state of a project, use the
 * GetProject method.
 *
 * NOTE: If the request filter contains a `parent.type` and `parent.id` and
 * the caller has the `resourcemanager.projects.list` permission on the
 * parent, the results will be drawn from an alternate index which provides
 * more consistent results. In future versions of this API, this List method
 * will be split into List and Search to properly capture the behavorial
 * difference.
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
  const res = await cloudresourcemanager.projects.list({
    // An expression for filtering the results of the request.  Filter rules are case insensitive. The fields eligible for filtering are:  + `name` + `id` + `labels.<key>` (where *key* is the name of a label) + `parent.type` + `parent.id`  Some examples of using labels as filters:  | Filter           | Description                                         | |------------------|-----------------------------------------------------| | name:how*        | The project's name starts with "how".               | | name:Howl        | The project's name is `Howl` or `howl`.             | | name:HOWL        | Equivalent to above.                                | | NAME:howl        | Equivalent to above.                                | | labels.color:*   | The project has the label `color`.                  | | labels.color:red | The project's label `color` has the value `red`.    | | labels.color:red&nbsp;labels.size:big |The project's label `color` has   the value `red` and its label `size` has the value `big`.              |  If no filter is specified, the call will return projects for which the user has the `resourcemanager.projects.get` permission.  NOTE: To perform a by-parent query (eg., what projects are directly in a Folder), the caller must have the `resourcemanager.projects.list` permission on the parent and the filter must contain both a `parent.type` and a `parent.id` restriction (example: "parent.type:folder parent.id:123"). In this case an alternate search index is used which provides more consistent results.  Optional.
    filter: 'placeholder-value',
    // The maximum number of Projects to return in the response. The server can return fewer Projects than requested. If unspecified, server picks an appropriate default.  Optional.
    pageSize: 'placeholder-value',
    // A pagination token returned from a previous call to ListProjects that indicates from where listing should continue.  Optional.
    pageToken: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
