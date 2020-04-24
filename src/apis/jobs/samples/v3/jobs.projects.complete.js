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
const jobs = google.jobs('v3');

/*
 * Completes the specified prefix with keyword suggestions.
 * Intended for use by a job search auto-complete search box.
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
      'https://www.googleapis.com/auth/jobs',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await jobs.projects.complete({
    // Optional. If provided, restricts completion to specified company.  The format is "projects/{project_id}/companies/{company_id}", for example, "projects/api-test-project/companies/foo".
    companyName: 'placeholder-value',
    // Deprecated. Use language_codes instead.  Optional.  The language of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).  For CompletionType.JOB_TITLE type, only open jobs with the same language_code are returned.  For CompletionType.COMPANY_NAME type, only companies having open jobs with the same language_code are returned.  For CompletionType.COMBINED type, only open jobs with the same language_code or companies having open jobs with the same language_code are returned.  The maximum number of allowed characters is 255.
    languageCode: 'placeholder-value',
    // Optional. The list of languages of the query. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47).  For CompletionType.JOB_TITLE type, only open jobs with the same language_codes are returned.  For CompletionType.COMPANY_NAME type, only companies having open jobs with the same language_codes are returned.  For CompletionType.COMBINED type, only open jobs with the same language_codes or companies having open jobs with the same language_codes are returned.  The maximum number of allowed characters is 255.
    languageCodes: 'placeholder-value',
    // Required. Resource name of project the completion is performed within.  The format is "projects/{project_id}", for example, "projects/api-test-project".
    name: 'projects/my-project',
    // Required. Completion result count.  The maximum allowed page size is 10.
    pageSize: 'placeholder-value',
    // Required. The query used to generate suggestions.  The maximum number of allowed characters is 255.
    query: 'placeholder-value',
    // Optional. The scope of the completion. The defaults is CompletionScope.PUBLIC.
    scope: 'placeholder-value',
    // Optional. The completion topic. The default is CompletionType.COMBINED.
    type: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
