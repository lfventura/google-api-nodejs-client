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
const cloudiot = google.cloudiot('v1');

/*
 * Sends a command to the specified device. In order for a device to be able
 * to receive commands, it must:
 * 1) be connected to Cloud IoT Core using the MQTT protocol, and
 * 2) be subscribed to the group of MQTT topics specified by
 *    /devices/{device-id}/commands/#. This subscription will receive commands
 *    at the top-level topic /devices/{device-id}/commands as well as commands
 *    for subfolders, like /devices/{device-id}/commands/subfolder.
 *    Note that subscribing to specific subfolders is not supported.
 * If the command could not be delivered to the device, this method will
 * return an error; in particular, if the device is not subscribed, this
 * method will return FAILED_PRECONDITION. Otherwise, this method will
 * return OK. If the subscription is QoS 1, at least once delivery will be
 * guaranteed; for QoS 0, no acknowledgment will be expected from the device.
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
      'https://www.googleapis.com/auth/cloudiot',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await cloudiot.projects.locations.registries.devices.sendCommandToDevice(
    {
      // Required. The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
      name:
        'projects/my-project/locations/my-location/registries/[^/]+/devices/[^/]+',

      // Request body metadata
      requestBody: {
        // request body parameters
      },
    }
  );
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
