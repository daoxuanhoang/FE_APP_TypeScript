import React, { useEffect } from "react";
import { useHome } from "./hooks/useHome";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const LoginPage = React.lazy(() => import("./pages/auth/login/index"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path={`/`} element={<HomePage />} />
      </Routes>
    </Router>
  );
}

const HomePage = () => {
  const { onGetUsers, users } = useHome();
  console.log(users);

  useEffect(() => {
    onGetUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
