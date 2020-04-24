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
 * Executes all the requests in the given Bundle.
 *
 * Implements the FHIR standard batch/transaction interaction
 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#transaction),
 * [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#transaction),
 * [R4](http://hl7.org/implement/standards/fhir/R4/http.html#transaction)).
 *
 * Supports all interactions within a bundle, except search. This method
 * accepts Bundles of type `batch` and `transaction`, processing them
 * according to the batch processing rules
 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.16.1),
 * [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.17.1),
 * [R4](http://hl7.org/implement/standards/fhir/R4/http.html#brules))
 * and transaction processing rules
 * ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.16.2),
 * [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.17.2),
 * [R4](http://hl7.org/implement/standards/fhir/R4/http.html#trules)).
 *
 * The request body must contain a JSON-encoded FHIR `Bundle` resource, and
 * the request headers must contain `Content-Type: application/fhir+json`.
 *
 * For a batch bundle or a successful transaction the response body will
 * contain a JSON-encoded representation of a `Bundle` resource of type
 * `batch-response` or `transaction-response` containing one entry for each
 * entry in the request, with the outcome of processing the entry. In the
 * case of an error for a transaction bundle, the response body will contain
 * a JSON-encoded `OperationOutcome` resource describing the reason for the
 * error. If the request cannot be mapped to a valid API method on a FHIR
 * store, a generic GCP error might be returned instead.
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
  const res = await healthcare.projects.locations.datasets.fhirStores.fhir.executeBundle(
    {
      // Name of the FHIR store in which this bundle will be executed.
      parent:
        'projects/my-project/locations/my-location/datasets/[^/]+/fhirStores/[^/]+',

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
