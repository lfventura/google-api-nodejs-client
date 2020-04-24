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
 * Creates an alias from a key, certificate pair.
 * The structure of the request is controlled by the `format` query parameter:
 *  * `keycertfile` - Separate PEM-encoded key and certificate files are
 *  uploaded. The request must have `Content-Type: multipart/form-data` and
 *  include fields `keyFile` and `certFile`. If uploading to a truststore,
 *  omit `keyFile`.
 * * `pkcs12` - A PKCS12 file is uploaded. The request must have
 * `Content-Type: multipart/form-data` with the file provided in the only
 * field.
 * * `selfsignedcert` - A new private key and certificate are generated. The
 * request must have `Content-Type: application/json` and a body of
 * CertificateGenerationSpec.
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
  const res = await apigee.organizations.environments.keystores.aliases.create({
    // The alias for the key, certificate pair. Values must match regular expression `[\w\s-.]{1,255}`. This must be provided for all formats except 'selfsignedcert'; self-signed certs may specify the alias in either this parameter or the JSON body.
    alias: 'placeholder-value',
    // Required. The format of the data. Must be either `selfsignedcert`, `keycertfile`, or `pkcs12`.
    format: 'placeholder-value',
    // If `true`, no expiry validation will be performed.
    ignoreExpiryValidation: 'placeholder-value',
    // If `true`, do not throw an error when the file contains a chain with no newline between each certificate. By default, a newline is needed between each certificate in a chain.
    ignoreNewlineValidation: 'placeholder-value',
    // Required. The name of the keystore. Must be of the form `organizations/{organization}/environments/{environment}/keystores/{keystore}`.
    parent: 'organizations/[^/]+/environments/[^/]+/keystores/[^/]+',
    // The password for the private key file, if it exists.
    _password: 'placeholder-value',

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
