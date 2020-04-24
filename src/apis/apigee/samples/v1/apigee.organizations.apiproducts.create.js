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
 * Creates an API product in an organization.
 * You create API products after
 * you have proxied backend services using API proxies.
 * An API product is a
 * collection of API resources combined with quota settings and metadata that
 * you can use to deliver customized and productized API bundles to your
 * developer community. This metadata can include:
 *
 * - Scope
 * - Environments
 * - API proxies
 * - Extensible profile
 *
 * API products enable you repackage APIs
 * on-the-fly, without having to do any additional coding or configuration.
 * Apigee recommends that you start with a simple API product including only
 * required elements. You then provision credentials to apps to enable them to
 * start testing your APIs.
 *
 * After you have authentication and authorization
 * working against a simple API product, you can iterate to create finer
 * grained API products, defining different sets of API resources for each API
 * product.
 *
 * <aside class="warning"><strong>WARNING:</strong>
 *
 * - If you don't specify an API proxy in the request body, <em>any</em> app
 * associated with the product can make calls to <em>any</em> API in your
 * entire organization.
 * - If you don't specify an environment in the request body, the product
 * allows access to all environments.
 *
 * </aside>
 *
 * For more information, see {{what_api_product}}
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
  const res = await apigee.organizations.apiproducts.create({
    // Required. The parent organization name under which the API product will be created. Must be in the following form: <pre>organizations/<var>organization_ID</var></pre>
    parent: 'organizations/[^/]+',

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
