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
const apigee = google.apigee('v1');

/*
 * Lists all developers in an organization by email address.
 *
 * By default,
 * the response does not include company developers. Set the `includeCompany`
 * query parameter to `true` to include company developers.
 *
 * **Note**: A maximum of 1000 developers are returned in the response. You
 * paginate the list of developers returned using the `startKey` and `count`
 * query parameters.
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
  const res = await apigee.organizations.developers.list({
    // Optional. Number of developers to return in the API call. Use with the `startKey` parameter to provide more targeted filtering. The limit is 1000.
    count: 'placeholder-value',
    // Specifies whether to expand the results. Set to `true` to expand the results. This query parameter is not valid if you use the `count` or `startKey` query parameters.
    expand: 'placeholder-value',
    // Optional. List of IDs to include, separated by commas.
    ids: 'placeholder-value',
    // Flag that specifies whether to include company details in the response.
    includeCompany: 'placeholder-value',
    // Required. Name of the Apigee organization. Use the following structure in your request:   `organizations/{org}`.
    parent: 'organizations/[^/]+',
    // **Note**: Must be used in conjunction with the `count` parameter.  Email address of the developer from which to start displaying the list of developers. For example, if the an unfiltered list returns:  ``` westley@example.com fezzik@example.com buttercup@example.com ```  and your `startKey` is `fezzik@example.com`, the list returned will be  ``` fezzik@example.com buttercup@example.com ```
    startKey: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
