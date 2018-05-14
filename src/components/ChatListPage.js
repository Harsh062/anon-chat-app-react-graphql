import React, { Component } from 'react';
import {
  QueryRenderer,
  graphql
} from 'react-relay';
import environment from '../Environment';
import ChatList from './ChatList';

const ChatListPageQuery = graphql`
query ChatListPageQuery {
  viewer {
    ...ChatList_viewer
  }
}
`

class ChatListPage extends Component {
    
      render() {
        return (
          <QueryRenderer
            environment={environment}
            query={ChatListPageQuery}
            render={({error, props}) => {
              if (error) {
                return <div>{error.message}</div>
              } else if (props) {
                return <ChatList viewer={props.viewer} />
              }
              return <div>Loading</div>
            }}
          />
        )
      }
    
    }
    
    export default ChatListPage;