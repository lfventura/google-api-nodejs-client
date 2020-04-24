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
const dlp = google.dlp('v2');

/*
 * Lists DlpJobs that match the specified filter in the request.
 * See https://cloud.google.com/dlp/docs/inspecting-storage and
 * https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
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
  const res = await dlp.projects.locations.dlpJobs.list({
    // Allows filtering.  Supported syntax:  * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect jobs:     - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED     - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY     - `trigger_name` - The resource name of the trigger that created job.     - 'end_time` - Corresponds to time the job finished.     - 'start_time` - Corresponds to time the job finished. * Supported fields for risk analysis jobs:     - `state` - RUNNING|CANCELED|FINISHED|FAILED     - 'end_time` - Corresponds to time the job finished.     - 'start_time` - Corresponds to time the job finished. * The operator must be `=` or `!=`.  Examples:  * inspected_storage = cloud_storage AND state = done * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = done OR state = canceled) * end_time > \"2017-12-12T00:00:00+00:00\"  The length of this field should be no more than 500 characters.
    filter: 'placeholder-value',
    // The geographic location where jobs will be retrieved from. Use `-` for all locations. Reserved for future extensions.
    locationId: 'placeholder-value',
    // Comma separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case-insensitive, default sorting order is ascending, redundant space characters are insignificant.  Example: `name asc, end_time asc, create_time desc`  Supported fields are:  - `create_time`: corresponds to time the job was created. - `end_time`: corresponds to time the job ended. - `name`: corresponds to job's name. - `state`: corresponds to `state`
    orderBy: 'placeholder-value',
    // The standard list page size.
    pageSize: 'placeholder-value',
    // The standard list page token.
    pageToken: 'placeholder-value',
    // Required. The parent resource name, for example projects/my-project-id.
    parent: 'projects/my-project',
    // The type of job. Defaults to `DlpJobType.INSPECT`
    type: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
