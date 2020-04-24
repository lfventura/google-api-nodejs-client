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
const healthcare = google.healthcare('v1beta1');

/*
 * Deletes FHIR resources that match a search query.
 *
 * Implements the FHIR standard conditional delete interaction
 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.12.1),
 * [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.13.1),
 * [R4](http://hl7.org/implement/standards/fhir/R4/http.html#3.1.0.7.1)).
 * If multiple resources match, all of them will be deleted.
 *
 * Search terms are provided as query parameters following the same pattern as
 * the search method.
 *
 * Note: Unless resource versioning is disabled by setting the
 * disable_resource_versioning flag
 * on the FHIR store, the deleted resources will be moved to a history
 * repository that can still be retrieved through vread
 * and related methods, unless they are removed by the
 * purge method.
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
  const res = await healthcare.projects.locations.datasets.fhirStores.fhir.conditionalDelete(
    {
      // The name of the FHIR store this resource belongs to.
      parent:
        'projects/my-project/locations/my-location/datasets/[^/]+/fhirStores/[^/]+',
      // The FHIR resource type to delete, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)).
      type: '[^/]+',
    }
  );
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
