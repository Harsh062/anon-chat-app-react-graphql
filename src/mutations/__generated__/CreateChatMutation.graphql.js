/**
 * @flow
 * @relayHash 2d5cbd454265206d98b41ded82786773
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateChatInput = {
  content: string,
  from: string,
  clientMutationId: string,
};
export type CreateChatMutationVariables = {|
  input: CreateChatInput
|};
export type CreateChatMutationResponse = {|
  +createChat: ?{|
    +chat: ?{|
      +id: string,
      +createdAt: any,
      +from: string,
      +content: string,
    |}
  |}
|};
*/


/*
mutation CreateChatMutation(
  $input: CreateChatInput!
) {
  createChat(input: $input) {
    chat {
      id
      createdAt
      from
      content
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateChatInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createChat",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateChatInput!"
      }
    ],
    "concreteType": "CreateChatPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "chat",
        "storageKey": null,
        "args": null,
        "concreteType": "Chat",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "createdAt",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "from",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "content",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateChatMutation",
  "id": null,
  "text": "mutation CreateChatMutation(\n  $input: CreateChatInput!\n) {\n  createChat(input: $input) {\n    chat {\n      id\n      createdAt\n      from\n      content\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateChatMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateChatMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '99990f6ec939442273675c6e69db90d5';
module.exports = node;
