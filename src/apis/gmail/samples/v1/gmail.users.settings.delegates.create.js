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
const gmail = google.gmail('v1');

/*
 * Adds a delegate with its verification status set directly to
 * <code>accepted</code>, without sending any verification email.  The
 * delegate user must be a member of the same G Suite organization as the
 * delegator user.
 *
 * Gmail imposes limitations on the number of delegates and delegators each
 * user in a G Suite organization can have. These limits depend on your
 * organization, but in general each user can have up to 25 delegates and
 * up to 10 delegators.
 *
 * Note that a delegate user must be referred to by their primary email
 * address, and not an email alias.
 *
 * Also note that when a new delegate is created, there may be up to a one
 * minute delay before the new delegate is available for use.
 *
 * This method is only available to service account clients that have been
 * delegated domain-wide authority.
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
    scopes: ['https://www.googleapis.com/auth/gmail.settings.sharing'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await gmail.users.settings.delegates.create({
    // User's email address.  The special value "me" can be used to indicate the authenticated user.
    userId: 'placeholder-value',

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
