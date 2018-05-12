import React from 'react';
import moment from 'moment';
import './Chatbox.css'

const Chatbox = ({message}) => (
  <div className="chat-box">
      <h5>{message.from}</h5>
      <div className="msg-wrapper">
        <div className="msg-content">
          {message.content}
        </div>
        <div className="message-time">
          {moment(message.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
  </div>
);

export default Chatbox;