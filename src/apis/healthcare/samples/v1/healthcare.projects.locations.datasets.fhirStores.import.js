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
const healthcare = google.healthcare('v1');

/*
 * Import resources to the FHIR store by loading data from the specified
 * sources. This method is optimized to load large quantities of data using
 * import semantics that ignore some FHIR store configuration options and are
 * not suitable for all use cases. It is primarily intended to load data into
 * an empty FHIR store that is not being used by other clients. In cases
 * where this method is not appropriate, consider using ExecuteBundle to
 * load data.
 *
 * Every resource in the input must contain a client-supplied ID, and will be
 * stored using that ID regardless of the
 * enable_update_create setting on the FHIR
 * store.
 *
 * The import process does not enforce referential integrity, regardless of
 * the
 * disable_referential_integrity
 * setting on the FHIR store. This allows the import of resources with
 * arbitrary interdependencies without considering grouping or ordering, but
 * if the input data contains invalid references or if some resources fail to
 * be imported, the FHIR store might be left in a state that violates
 * referential integrity.
 *
 * The import process does not trigger PubSub notification or BigQuery
 * streaming update, regardless of how those are configured on the FHIR store.
 *
 * If a resource with the specified ID already exists, the most recent
 * version of the resource is overwritten without creating a new historical
 * version, regardless of the
 * disable_resource_versioning
 * setting on the FHIR store. If transient failures occur during the import,
 * it is possible that successfully imported resources will be overwritten
 * more than once.
 *
 * The import operation is idempotent unless the input data contains multiple
 * valid resources with the same ID but different contents. In that case,
 * after the import completes, the store will contain exactly one resource
 * with that ID but there is no ordering guarantee on which version of the
 * contents it will have. The operation result counters do not count
 * duplicate IDs as an error and will count one success for each resource in
 * the input, which might result in a success count larger than the number
 * of resources in the FHIR store. This often occurs when importing data
 * organized in bundles produced by Patient-everything
 * where each bundle contains its own copy of a resource such as Practitioner
 * that might be referred to by many patients.
 *
 * If some resources fail to import, for example due to parsing errors,
 * successfully imported resources are not rolled back.
 *
 * The location and format of the input data is specified by the parameters
 * below. Note that if no format is specified, this method assumes the
 * `BUNDLE` format. When using the `BUNDLE` format this method ignores the
 * `Bundle.type` field, except that `history` bundles are rejected, and does
 * not apply any of the bundle processing semantics for batch or transaction
 * bundles. Unlike in ExecuteBundle, transaction bundles are not executed
 * as a single transaction and bundle-internal references are not rewritten.
 * The bundle is treated as a collection of resources to be written as
 * provided in `Bundle.entry.resource`, ignoring `Bundle.entry.request`. As
 * an example, this allows the import of `searchset` bundles produced by a
 * FHIR search or
 * Patient-everything operation.
 *
 * This method returns an Operation that can
 * be used to track the status of the import by calling
 * GetOperation.
 *
 * Immediate fatal errors appear in the
 * error field, errors are also logged
 * to Stackdriver (see [Viewing
 * logs](/healthcare/docs/how-tos/stackdriver-logging)). Otherwise, when the
 * operation finishes, a detailed response of type ImportResourcesResponse
 * is returned in the response field.
 * The metadata field type for this
 * operation is OperationMetadata.
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
  const res = await healthcare.projects.locations.datasets.fhirStores.import({
    // The name of the FHIR store to import FHIR resources to. The name should be in the format of `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
    name:
      'projects/my-project/locations/my-location/datasets/[^/]+/fhirStores/[^/]+',

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
