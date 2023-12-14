import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [myName, setMyName] = useState('');
  const [newMsg, setNewMsg] = useState('');
  const [chatText, setChatText] = useState([]);

  useEffect(() => {
    // Adjust the webSocket protocol to what is being used for HTTP
    const protocol = window.location.protocol.includes('https') ? 'wss' : 'ws';
    const newSocket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    
    // Display that we have opened the webSocket
    newSocket.onopen = (event) => {
      appendMsg('system', 'websocket', 'connected');
    };
    
    // Display messages we receive from our friends
    newSocket.onmessage = async (event) => {
      const text = await event.data.text();
      const chat = JSON.parse(text);
      appendMsg('friend', chat.name, chat.msg);
    };
    
    // If the webSocket is closed then disable the interface
    newSocket.onclose = (event) => {
      appendMsg('system', 'websocket', 'disconnected');
      setMyName('');
      setChatText([]);
    };

    setSocket(newSocket);

    return () => {
      // Close the WebSocket connection when the component unmounts
      newSocket.close();
    };
  }, []);

  const sendMessage = () => {
    if (!!newMsg) {
      appendMsg('me', 'me', newMsg);
      socket.send(`{"name":"${myName}", "msg":"${newMsg}"}`);
      setNewMsg('');
    }
  };

  const appendMsg = (cls, from, msg) => {
    setChatText((prevChat) => [
      `<div key=${Date.now()}><span class="${cls}">${from}</span>: ${msg}</div>`,
      ...prevChat,
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div>
      <header>
        <li><a className="link" href="/main.html">Weather</a></li>
      </header>
      <div className="name">
        <fieldset id="name-controls">
          <legend>My Name</legend>
          <input
            id="my-name"
            type="text"
            value={myName}
            onChange={(e) => setMyName(e.target.value)}
          />
        </fieldset>
      </div>
      <fieldset id="chat-controls" disabled={!myName}>
        <legend>Chat</legend>
        <input
          id="new-msg"
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={sendMessage}>Send</button>
      </fieldset>
      <div id="chat-text">{chatText}</div>
    </div>
  );
};

export default Chat;
