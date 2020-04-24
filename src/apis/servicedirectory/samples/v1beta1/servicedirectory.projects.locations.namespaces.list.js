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
const servicedirectory = google.servicedirectory('v1beta1');

/*
 * Lists all namespaces.
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
  const res = await servicedirectory.projects.locations.namespaces.list({
    // Optional. The filter to list result by.  General filter string syntax: <field> <operator> <value> (<logical connector>) <field> can be "name", or "labels.<key>" for map field. <operator> can be "<, >, <=, >=, !=, =, :". Of which ":" means HAS, and is roughly the same as "=". <value> must be the same data type as field. <logical connector> can be "AND, OR, NOT".  Examples of valid filters: * "labels.owner" returns Namespaces that have a label with the key "owner"   this is the same as "labels:owner". * "labels.protocol=gRPC" returns Namespaces that have key/value   "protocol=gRPC". * "name>projects/my-project/locations/us-east/namespaces/namespace-c"   returns Namespaces that have name that is alphabetically later than the   string, so "namespace-e" will be returned but "namespace-a" will not be. * "labels.owner!=sd AND labels.foo=bar" returns Namespaces that have   "owner" in label key but value is not "sd" AND have key/value foo=bar. * "doesnotexist.foo=bar" returns an empty list. Note that Namespace doesn't   have a field called "doesnotexist". Since the filter does not match any   Namespaces, it returns no results.
    filter: 'placeholder-value',
    // Optional. The order to list result by.  General order by string syntax: <field> (<asc|desc>) (,) <field> allows values {"name"} <asc/desc> ascending or descending order by <field>. If this is left blank, "asc" is used. Note that an empty order_by string result in default order, which is order by name in ascending order.
    orderBy: 'placeholder-value',
    // Optional. The maximum number of items to return.
    pageSize: 'placeholder-value',
    // Optional. The next_page_token value returned from a previous List request, if any.
    pageToken: 'placeholder-value',
    // Required. The resource name of the project and location whose namespaces we'd like to list.
    parent: 'projects/my-project/locations/my-location',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
