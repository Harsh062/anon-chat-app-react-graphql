/**
 * @flow
 * @relayHash 1c91b628328d7463e45c32a9a07d5ad7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewChatSubscriptionVariables = {||};
export type NewChatSubscriptionResponse = {|
  +Chat: ?{|
    +node: ?{|
      +id: string,
      +from: string,
      +createdAt: any,
      +content: string,
    |}
  |}
|};
*/


/*
subscription NewChatSubscription {
  Chat {
    node {
      id
      from
      createdAt
      content
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "Chat",
    "storageKey": null,
    "args": null,
    "concreteType": "ChatSubscriptionPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
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
            "name": "from",
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
  "operationKind": "subscription",
  "name": "NewChatSubscription",
  "id": null,
  "text": "subscription NewChatSubscription {\n  Chat {\n    node {\n      id\n      from\n      createdAt\n      content\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewChatSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "NewChatSubscription",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c14ee6390efc7021321240ae4148913d';
module.exports = node;
