import React from 'react';
import {
  BrowserRouter,
  NavLink,
  Routes,
  Navigate,
  Route
} from "react-router-dom";
import Main from "./main";
import Login from './login';
import Chat from './chat';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <NavLink to="/main">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/chat">Chat</NavLink>
        </nav>

        <main>
          <Routes>
            <Route path="/main" element={<Home />} exact />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer>Footer</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;