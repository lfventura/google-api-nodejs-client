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
const drive = google.drive('v3');

/*
 * Creates a new file.
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
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.appdata',
      'https://www.googleapis.com/auth/drive.file',
          ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await drive.files.create({
             // Set to true to opt in to API behavior that aims for all items to have exactly one parent. This parameter only takes effect if the item is not in a shared drive. Requests that specify more than one parent fail.    
    enforceSingleParent: 'placeholder-value',
         // Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.    
    ignoreDefaultVisibility: 'placeholder-value',
         // Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.    
    keepRevisionForever: 'placeholder-value',
         // A language hint for OCR processing during image import (ISO 639-1 code).    
    ocrLanguage: 'placeholder-value',
         // Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.    
    supportsAllDrives: 'placeholder-value',
         // Deprecated use supportsAllDrives instead.    
    supportsTeamDrives: 'placeholder-value',
         // Whether to use the uploaded content as indexable text.    
    useContentAsIndexableText: 'placeholder-value',
            
    // Request body metadata
    requestBody: {
      // request body parameters
    },
            media: {
      mimeType: 'placeholder-value';
      body: 'placeholder-value';
    },
    
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
