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
const pagespeedonline = google.pagespeedonline('v5');

/*
 * Runs PageSpeed analysis on the page at the specified URL, and returns
 * PageSpeed scores, a list of suggestions to make that page faster, and other
 * information.
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
    scopes: ['openid'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await pagespeedonline.pagespeedapi.runpagespeed({
    // The captcha token passed when filling out a captcha.
    captchaToken: 'placeholder-value',
    // A Lighthouse category to run; if none are given, only Performance category will be run
    category: 'placeholder-value',
    // The locale used to localize formatted results
    locale: 'placeholder-value',
    // The analysis strategy (desktop or mobile) to use, and desktop is the default
    strategy: 'placeholder-value',
    // The URL to fetch and analyze
    url: 'placeholder-value',
    // Campaign name for analytics.
    utm_campaign: 'placeholder-value',
    // Campaign source for analytics.
    utm_source: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
