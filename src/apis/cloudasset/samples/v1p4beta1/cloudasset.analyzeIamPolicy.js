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
const cloudasset = google.cloudasset('v1p4beta1');

/*
 * Analyzes IAM policies based on the specified request. Returns
 * a list of IamPolicyAnalysisResult matching the request.
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
  const res = await cloudasset.analyzeIamPolicy({
    // Optional. The permissions to appear in result.
    'analysisQuery.accessSelector.permissions': 'placeholder-value',
    // Optional. The roles to appear in result.
    'analysisQuery.accessSelector.roles': 'placeholder-value',
    // Required. The identity appear in the form of members in [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding).
    'analysisQuery.identitySelector.identity': 'placeholder-value',
    // Required. The [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name) .
    'analysisQuery.resourceSelector.fullResourceName': 'placeholder-value',
    // Optional. If true, the response will include access analysis from identities to resources via service account impersonation. This is a very expensive operation, because many derived queries will be executed. We highly recommend you use ExportIamPolicyAnalysis rpc instead.  For example, if the request analyzes for which resources user A has permission P, and there's an IAM policy states user A has iam.serviceAccounts.getAccessToken permission to a service account SA, and there's another IAM policy states service account SA has permission P to a GCP folder F, then user A potentially has access to the GCP folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis.  Another example, if the request analyzes for who has permission P to a GCP folder F, and there's an IAM policy states user A has iam.serviceAccounts.actAs permission to a service account SA, and there's another IAM policy states service account SA has permission P to the GCP folder F, then user A potentially has access to the GCP folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis.  Default is false.
    'options.analyzeServiceAccountImpersonation': 'placeholder-value',
    // Optional. Amount of time executable has to complete.  See JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json).  If this field is set with a value less than the RPC deadline, and the execution of your query hasn't finished in the specified execution timeout,  you will get a response with partial result. Otherwise, your query's execution will continue until the RPC deadline. If it's not finished until then, you will get a  DEADLINE_EXCEEDED error.  Default is empty.
    'options.executionTimeout': 'placeholder-value',
    // Optional. If true, the identities section of the result will expand any Google groups appearing in an IAM policy binding.  If identity_selector is specified, the identity in the result will be determined by the selector, and this flag will have no effect.  Default is false.
    'options.expandGroups': 'placeholder-value',
    // Optional. If true, the resource section of the result will expand any resource attached to an IAM policy to include resources lower in the resource hierarchy.  For example, if the request analyzes for which resources user A has permission P, and the results include an IAM policy with P on a GCP folder, the results will also include resources in that folder with permission P.  If resource_selector is specified, the resource section of the result will be determined by the selector, and this flag will have no effect. Default is false.
    'options.expandResources': 'placeholder-value',
    // Optional. If true, the access section of result will expand any roles appearing in IAM policy bindings to include their permissions.  If access_selector is specified, the access section of the result will be determined by the selector, and this flag will have no effect.  Default is false.
    'options.expandRoles': 'placeholder-value',
    // Optional. If true, the result will output group identity edges, starting from the binding's group members, to any expanded identities. Default is false.
    'options.outputGroupEdges': 'placeholder-value',
    // Optional. If true, the result will output resource edges, starting from the policy attached resource, to any expanded resources. Default is false.
    'options.outputResourceEdges': 'placeholder-value',
    // Required. The relative name of the root asset. Only resources and IAM policies within the parent will be analyzed. This can only be an organization number (such as "organizations/123") or a folder number (such as "folders/123").
    parent: '[^/]+/[^/]+',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
