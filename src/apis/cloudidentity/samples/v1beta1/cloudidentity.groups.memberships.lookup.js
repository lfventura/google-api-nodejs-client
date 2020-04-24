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
const cloudidentity = google.cloudidentity('v1beta1');

/*
 * Looks up the [resource
 * name](https://cloud.google.com/apis/design/resource_names) of a
 * `Membership` by its `EntityKey`.
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
      'https://www.googleapis.com/auth/cloud-identity.groups',
      'https://www.googleapis.com/auth/cloud-identity.groups.readonly',
      'https://www.googleapis.com/auth/cloud-platform',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await cloudidentity.groups.memberships.lookup({
    // The ID of the entity.  For Google-managed entities, the `id` must be the email address of an existing group or user.  For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements.  Must be unique within a `namespace`.
    'memberKey.id': 'placeholder-value',
    // The namespace in which the entity exists.  If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group.  If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}.
    'memberKey.namespace': 'placeholder-value',
    // Required. The parent `Group` resource under which to lookup the `Membership` name.  Must be of the form `groups/{group_id}`.
    parent: 'groups/[^/]+',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
