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
 * Updates a tag template. This method cannot be used to update the fields of
 * a template. The tag template fields are represented as separate resources
 * and should be updated using their own create/update/delete methods.
 * Users should enable the Data Catalog API in the project identified by
 * the `tag_template.name` parameter (see [Data Catalog Resource Project]
 * (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for
 * more information).
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
  const res = await datacatalog.projects.locations.tagTemplates.patch({
    // The resource name of the tag template in URL format. Example:  * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}  Note that this TagTemplate and its child resources may not actually be stored in the location in this name.
    name: 'projects/my-project/locations/my-location/tagTemplates/[^/]+',
    // The field mask specifies the parts of the template to overwrite.  Allowed fields:    * `display_name`  If absent or empty, all of the allowed fields above will be updated.
    updateMask: 'placeholder-value',

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
