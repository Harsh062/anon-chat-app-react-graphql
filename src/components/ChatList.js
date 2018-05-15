import React, { Component } from 'react';
import Chat from './Chat';
import '../App.css';
import NewChatSubscription from '../subscriptions/NewChatSubscription';

import {
  createFragmentContainer,
  graphql
} from 'react-relay';

class ChatList extends Component {

  componentDidMount() {
    NewChatSubscription();
  }

  render() {
    return (
      <div className="chat-content-wrapper">
        {this.props.viewer.allChats.edges.map(({node}) =>
          <Chat key={node.__id} message={node} />
      )}
      </div>
    )
  }

}

export default createFragmentContainer(ChatList, graphql`
fragment ChatList_viewer on Viewer {
  allChats(last: 100, orderBy: createdAt_DESC) @connection(key: "ChatList_allChats", filters: []) {
    edges {
      node {
        ...Chat_message
      }
    }
  }
}
`);