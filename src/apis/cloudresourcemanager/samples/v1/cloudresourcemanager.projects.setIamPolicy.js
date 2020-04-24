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
const cloudresourcemanager = google.cloudresourcemanager('v1');

/*
 * Sets the IAM access control policy for the specified Project. Overwrites
 * any existing policy.
 *
 * The following constraints apply when using `setIamPolicy()`:
 *
 * + Project does not support `allUsers` and `allAuthenticatedUsers` as
 * `members` in a `Binding` of a `Policy`.
 *
 * + The owner role can be granted to a `user`, `serviceAccount`, or a group
 * that is part of an organization. For example,
 * group@myownpersonaldomain.com could be added as an owner to a project in
 * the myownpersonaldomain.com organization, but not the examplepetstore.com
 * organization.
 *
 * + Service accounts can be made owners of a project directly
 * without any restrictions. However, to be added as an owner, a user must be
 * invited via Cloud Platform console and must accept the invitation.
 *
 * + A user cannot be granted the owner role using `setIamPolicy()`. The user
 * must be granted the owner role using the Cloud Platform Console and must
 * explicitly accept the invitation.
 *
 * + You can only grant ownership of a project to a member by using the
 * GCP Console. Inviting a member will deliver an invitation email that
 * they must accept. An invitation email is not generated if you are
 * granting a role other than owner, or if both the member you are inviting
 * and the project are part of your organization.
 *
 * + Membership changes that leave the project without any owners that have
 * accepted the Terms of Service (ToS) will be rejected.
 *
 * + If the project is not part of an organization, there must be at least
 * one owner who has accepted the Terms of Service (ToS) agreement in the
 * policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner
 * from the policy will fail. This restriction also applies to legacy
 * projects that no longer have owners who have accepted the ToS. Edits to
 * IAM policies will be rejected until the lack of a ToS-accepting owner is
 * rectified.
 *
 * + This method will replace the existing policy, and cannot be used to
 * append additional IAM settings.
 *
 * Note: Removing service accounts from policies or changing their roles
 * can render services completely inoperable. It is important to understand
 * how the service account is being used before removing or updating its
 * roles.
 *
 * Authorization requires the Google IAM permission
 * `resourcemanager.projects.setIamPolicy` on the project
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
  const res = await cloudresourcemanager.projects.setIamPolicy({
    // REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
    resource: 'placeholder-value',

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
