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
 * De-identifies data from the source store and writes it to the destination
 * store. The metadata field type
 * is OperationMetadata.
 * If the request is successful, the
 * response field type is
 * DeidentifyDicomStoreSummary. If errors occur,
 * error
 * details field type is
 * DeidentifyErrorDetails.
 * The LRO result may still be successful if de-identification fails for some
 * DICOM instances. The output DICOM store will not contain
 * these failed resources. Failed resource totals are tracked in
 * DeidentifySummary.failure_resource_count.
 * Error details are also logged to Stackdriver
 * (see [Viewing logs](/healthcare/docs/how-tos/stackdriver-logging)).
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
  const res = await healthcare.projects.locations.datasets.dicomStores.deidentify(
    {
      // Source DICOM store resource name. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
      sourceStore:
        'projects/my-project/locations/my-location/datasets/[^/]+/dicomStores/[^/]+',

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
