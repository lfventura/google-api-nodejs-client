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
const spanner = google.spanner('v1');

/*
 * Lists completed and pending backups.
 * Backups returned are ordered by `create_time` in descending order,
 * starting from the most recent `create_time`.
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
      'https://www.googleapis.com/auth/spanner.admin',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await spanner.projects.instances.backups.list({
    // An expression that filters the list of returned backups.  A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive.  The following fields in the Backup are eligible for filtering:    * `name`   * `database`   * `state`   * `create_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ)   * `expire_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ)   * `size_bytes`  You can combine multiple expressions by enclosing each expression in parentheses. By default, expressions are combined with AND logic, but you can specify AND, OR, and NOT logic explicitly.  Here are a few examples:    * `name:Howl` - The backup's name contains the string "howl".   * `database:prod`          - The database's name contains the string "prod".   * `state:CREATING` - The backup is pending creation.   * `state:READY` - The backup is fully created and ready for use.   * `(name:howl) AND (create_time < \"2018-03-28T14:50:00Z\")`          - The backup name contains the string "howl" and `create_time`              of the backup is before 2018-03-28T14:50:00Z.   * `expire_time < \"2018-03-28T14:50:00Z\"`          - The backup `expire_time` is before 2018-03-28T14:50:00Z.   * `size_bytes > 10000000000` - The backup's size is greater than 10GB
    filter: 'placeholder-value',
    // Number of backups to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.
    pageSize: 'placeholder-value',
    // If non-empty, `page_token` should contain a next_page_token from a previous ListBackupsResponse to the same `parent` and with the same `filter`.
    pageToken: 'placeholder-value',
    // Required. The instance to list backups from.  Values are of the form `projects/<project>/instances/<instance>`.
    parent: 'projects/my-project/instances/[^/]+',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
