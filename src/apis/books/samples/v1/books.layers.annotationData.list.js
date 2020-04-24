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
const books = google.books('v1');

/*
 * Gets the annotation data for a volume and layer.
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
    scopes: ['https://www.googleapis.com/auth/books'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await books.layers.annotationData.list({
    // The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.
    annotationDataId: 'placeholder-value',
    // The content version for the requested volume.
    contentVersion: 'placeholder-value',
    // The requested pixel height for any images. If height is provided width must also be provided.
    h: 'placeholder-value',
    // The ID for the layer to get the annotation data.
    layerId: 'placeholder-value',
    // The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
    locale: 'placeholder-value',
    // Maximum number of results to return
    maxResults: 'placeholder-value',
    // The value of the nextToken from the previous page.
    pageToken: 'placeholder-value',
    // The requested scale for the image.
    scale: 'placeholder-value',
    // String to identify the originator of this request.
    source: 'placeholder-value',
    // RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
    updatedMax: 'placeholder-value',
    // RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
    updatedMin: 'placeholder-value',
    // The volume to retrieve annotation data for.
    volumeId: 'placeholder-value',
    // The requested pixel width for any images. If width is provided height must also be provided.
    w: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
