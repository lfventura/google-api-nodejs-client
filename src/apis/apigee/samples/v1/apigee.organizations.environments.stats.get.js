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
 * Retrieve metrics grouped by dimensions.
 * The types of metrics you can retrieve include traffic, message counts,
 * API call latency, response size, and cache hits and counts.
 * Dimensions let you view metrics in meaningful groups.
 * The stats api does accept dimensions as path params. The dimensions are
 * optional in which case the metrics are computed on the entire data
 * for the given timerange.
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
  const res = await apigee.organizations.environments.stats.get({
    // Legacy field. not used anymore This field is present to support UI calls which still use this parameter
    accuracy: 'placeholder-value',
    // If customers want to query custom aggregate tables, then this parameter can be used to specify the table name. If this parameter is skipped, then Edge Query will try to retrieve the data from fact tables which will be expensive.
    aggTable: 'placeholder-value',
    // Enables drill-down on specific dimension values
    filter: 'placeholder-value',
    // This parameter is used to limit the number of result items. Default and the max value is 14400
    limit: 'placeholder-value',
    // Required. The organization and environment name for which the interactive query will be executed. Must be of the form   `organizations/{organization_id}/environments/{environment_id/stats/{dimensions}` Dimensions let you view metrics in meaningful groupings. E.g. apiproxy, target_host. The value of dimensions should be comma separated list as shown below `organizations/{org}/environments/{env}/stats/apiproxy,request_verb`
    name: 'organizations/[^/]+/environments/[^/]+/stats/.*',
    // Use offset with limit to enable pagination of results. For example, to display results 11-20, set limit to '10' and offset to '10'.
    offset: 'placeholder-value',
    // Legacy field: not used anymore
    realtime: 'placeholder-value',
    // The select parameter contains a comma separated list of metrics E.g. sum(message_count),sum(error_count)
    select: 'placeholder-value',
    // This parameter routes the query to api monitoring service for last hour
    sonar: 'placeholder-value',
    // This parameter specifies if the sort order should be ascending or descending Supported values are DESC and ASC.
    sort: 'placeholder-value',
    // Comma separated list of columns to sort the final result.
    sortby: 'placeholder-value',
    // Time interval for the interactive query. Time range is specified as start~end E.g. 04/15/2017 00:00~05/15/2017 23:59
    timeRange: 'placeholder-value',
    // A value of second, minute, hour, day, week, month. Time Unit specifies the granularity of metrics returned.
    timeUnit: 'placeholder-value',
    // Take 'top k' results from results, for example, to return the top 5 results 'topk=5'.
    topk: 'placeholder-value',
    // Lists timestamps in ascending order if set to true. Recommend setting this value to true if you are using sortby with sort=DESC.
    tsAscending: 'placeholder-value',
    // This parameters contains the timezone offset value
    tzo: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
