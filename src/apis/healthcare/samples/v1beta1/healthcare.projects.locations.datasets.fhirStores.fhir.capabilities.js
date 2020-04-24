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
 * Gets the FHIR capability statement
 * ([STU3](http://hl7.org/implement/standards/fhir/STU3/capabilitystatement.html),
 * [R4](http://hl7.org/implement/standards/fhir/R4/capabilitystatement.html)),
 * or the [conformance
 * statement](http://hl7.org/implement/standards/fhir/DSTU2/conformance.html)
 * in the DSTU2 case for the store, which contains a description of
 * functionality supported by the server.
 *
 * Implements the FHIR standard capabilities interaction
 * ([STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#capabilities),
 * [R4](http://hl7.org/implement/standards/fhir/R4/http.html#capabilities)),
 * or the [conformance
 * interaction](http://hl7.org/implement/standards/fhir/DSTU2/http.html#conformance)
 * in the DSTU2 case.
 *
 * On success, the response body will contain a JSON-encoded representation
 * of a `CapabilityStatement` resource.
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
  const res = await healthcare.projects.locations.datasets.fhirStores.fhir.capabilities(
    {
      // Name of the FHIR store to retrieve the capabilities for.
      name:
        'projects/my-project/locations/my-location/datasets/[^/]+/fhirStores/[^/]+',
    }
  );
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
