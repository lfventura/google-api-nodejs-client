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
const translate = google.translate('v3');

/*
 * Returns a list of supported languages for translation.
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
      'https://www.googleapis.com/auth/cloud-translation',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await translate.projects.getSupportedLanguages({
    // Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response.
    displayLanguageCode: 'placeholder-value',
    // Optional. Get supported languages of this model.  The format depends on model type:  - AutoML Translation models:   `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`  - General (built-in) models:   `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,   `projects/{project-number-or-id}/locations/{location-id}/models/general/base`   Returns languages supported by the specified model. If missing, we get supported languages of Google general base (PBMT) model.
    model: 'placeholder-value',
    // Required. Project or location to make a call. Must refer to a caller's project.  Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`.  For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`.  Non-global location is required for AutoML models.  Only models within the same region (have same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned.
    parent: 'projects/my-project',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
