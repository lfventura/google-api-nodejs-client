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
const cloudtasks = google.cloudtasks('v2beta2');

/*
 * Leases tasks from a pull queue for
 * lease_duration.
 *
 * This method is invoked by the worker to obtain a lease. The
 * worker must acknowledge the task via
 * AcknowledgeTask after they have
 * performed the work associated with the task.
 *
 * The payload is intended to store data that
 * the worker needs to perform the work associated with the task. To
 * return the payloads in the response, set
 * response_view to
 * FULL.
 *
 * A maximum of 10 qps of LeaseTasks
 * requests are allowed per
 * queue. RESOURCE_EXHAUSTED
 * is returned when this limit is
 * exceeded. RESOURCE_EXHAUSTED
 * is also returned when
 * max_tasks_dispatched_per_second
 * is exceeded.
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
  const res = await cloudtasks.projects.locations.queues.tasks.lease({
    // Required. The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
    parent: 'projects/my-project/locations/my-location/queues/[^/]+',

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
