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
 * Forces a task to run now.
 *
 * When this method is called, Cloud Tasks will dispatch the task, even if
 * the task is already running, the queue has reached its RateLimits or
 * is PAUSED.
 *
 * This command is meant to be used for manual debugging. For
 * example, RunTask can be used to retry a failed
 * task after a fix has been made or to manually force a task to be
 * dispatched now.
 *
 * The dispatched task is returned. That is, the task that is returned
 * contains the status after the task is dispatched but
 * before the task is received by its target.
 *
 * If Cloud Tasks receives a successful response from the task's
 * target, then the task will be deleted; otherwise the task's
 * schedule_time will be reset to the time that
 * RunTask was called plus the retry delay specified
 * in the queue's RetryConfig.
 *
 * RunTask returns
 * NOT_FOUND when it is called on a
 * task that has already succeeded or permanently failed.
 *
 * RunTask cannot be called on a
 * pull task.
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
  const res = await cloudtasks.projects.locations.queues.tasks.run({
    // Required. The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
    name: 'projects/my-project/locations/my-location/queues/[^/]+/tasks/[^/]+',

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
