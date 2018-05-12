import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import Chatbox from './components/Chatbox';
import './App.css';

class App extends Component {
  state = {
    from: 'Anonymous',
    content: ''
  };
  componentDidMount() {
    const from = window.prompt('Enter Username');
    from && this.setState({ from });
    this.subscribeToNewChats();
  }
  subscribeToNewChats = () => {
    this.props.allChatsQuery.subscribeToMore({
      document: gql`
        subscription {
          Chat(filter: { mutation_in: [CREATED] }) {
            node {
              id
              from
              content
              createdAt
            }
          }
        }
      `,
      updateQuery: (previous, { subscriptionData }) => {
        const newChatLinks = [
          ...previous.allChats,
          subscriptionData.data.Chat.node
        ];
        const result = {
          ...previous,
          allChats: newChatLinks
        };
        console.log(result, previous, subscriptionData);
        return result;
      }
    });
  };
  createChat = async e => {
    if (e.key === 'Enter') {
      const { content, from } = this.state;
      await this.props.createChatMutation({
        variables: { content, from }
      });
      this.setState({ content: '' });
    }
  };
  render() {
    const allChats = this.props.allChatsQuery.allChats || [];
    return (
      <div className="">
        <div className="container">
          <h2>Chats</h2>
          {allChats.map(message => (
            <Chatbox key={message.id} message={message} />
          ))}
          <div className="input-wrapper">
            <input
              value={this.state.content}
              onChange={e => this.setState({ content: e.target.value })}
              type="text"
              placeholder="Start typing..."
              onKeyPress={this.createChat}
            />
          </div>
        </div>
      </div>
    );
  }
}


const ALL_CHATS_QUERY = gql`
  query AllChatsQuery {
    allChats {
      id
      createdAt
      from
      content
    }
  }
`;

const CREATE_CHAT_MUTATION = gql`
  mutation CreateChatMutation($content: String!, $from: String!) {
    createChat(content: $content, from: $from) {
      id
      createdAt
      from
      content
    }
  }
`;


export default compose(
  graphql(ALL_CHATS_QUERY, { name: 'allChatsQuery' }),
  graphql(CREATE_CHAT_MUTATION, { name: 'createChatMutation' })
)(App);
