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
const firebase = google.firebase('v1beta1');

/*
 * Links a FirebaseProject with an existing
 * [Google Analytics account](http://www.google.com/analytics/).
 * <br>
 * <br>Using this call, you can either:
 * <ul>
 * <li>Specify an `analyticsAccountId` to provision a new Google Analytics
 * property within the specified account and associate the new property with
 * your `FirebaseProject`.</li>
 * <li>Specify an existing `analyticsPropertyId` to associate the property
 * with your `FirebaseProject`.</li>
 * </ul>
 * <br>
 * Note that when you call `AddGoogleAnalytics`:
 * <ol>
 * <li>The first check determines if any existing data streams in the
 * Google Analytics property correspond to any existing Firebase Apps in your
 * `FirebaseProject` (based on the `packageName` or `bundleId` associated with
 * the data stream). Then, as applicable, the data streams and apps are
 * linked. Note that this auto-linking only applies to Android Apps and iOS
 * Apps.</li>
 * <li>If no corresponding data streams are found for your Firebase Apps,
 * new data streams are provisioned in the Google Analytics property
 * for each of your Firebase Apps. Note that a new data stream is always
 * provisioned for a Web App even if it was previously associated with a
 * data stream in your Analytics property.</li>
 * </ol>
 * Learn more about the hierarchy and structure of Google Analytics
 * accounts in the
 * [Analytics
 * documentation](https://support.google.com/analytics/answer/9303323).
 * <br>
 * <br>The result of this call is an [`Operation`](../../v1beta1/operations).
 * Poll the `Operation` to track the provisioning process by calling
 * GetOperation until
 * [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When
 * `done` is `true`, the `Operation` has either succeeded or failed. If the
 * `Operation` succeeded, its
 * [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to
 * an AnalyticsDetails; if the `Operation` failed, its
 * [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a
 * google.rpc.Status.
 * <br>
 * <br>To call `AddGoogleAnalytics`, a member must be an Owner for
 * the existing `FirebaseProject` and have the
 * [`Edit` permission](https://support.google.com/analytics/answer/2884495)
 * for the Google Analytics account.
 * <br>
 * <br>If a `FirebaseProject` already has Google Analytics enabled, and you
 * call `AddGoogleAnalytics` using an `analyticsPropertyId` that's different
 * from the currently associated property, then the call will fail. Analytics
 * may have already been enabled in the Firebase console or by specifying
 * `timeZone` and `regionCode` in the call to
 * [`AddFirebase`](../../v1beta1/projects/addFirebase).
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
      'https://www.googleapis.com/auth/firebase',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await firebase.projects.addGoogleAnalytics({
    // The parent `FirebaseProject` to link to an existing Google Analytics account, in the format: <br><code>projects/<var>projectId</var></code>
    parent: 'projects/my-project',

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
