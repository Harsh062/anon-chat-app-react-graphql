import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import ChatListPage from './components/ChatListPage';
import './App.css';

class App extends Component {
  state = {
    from: 'Anonymous',
    content: ''
  };
  componentDidMount() {
    // const from = window.prompt('Enter Username');
    // from && this.setState({ from });
    // this.subscribeToNewChats();
  }
  
  createChat = e => {
    console.log('Create chat called');
  };
  render() {
    return (
      <div className="">
        <div className="container">
          <h2>Chats</h2>
          <ChatListPage />
        </div>
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
    );
  }
}


export default App;
