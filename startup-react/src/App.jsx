import React from 'react';
import {
  BrowserRouter,
  NavLink,
  Routes,
  Navigate,
  Route
} from "react-router-dom" 
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/scores">Scores</NavLink>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/scores" element={<Scores />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer>Footer</footer>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div index className="home comp">
      Home Component
    </div>
  );
}

function About() {
  return <div className="about comp">About Component</div>;
}

function Users() {
  return <div className="users comp">Users Component</div>;
}

function Scores() {
  return <div className="scores comp">Scores Component</div>;
}

export default App;