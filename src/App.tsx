import React, { useEffect } from "react";
import { useHome } from "./hooks/useHome";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getCookie } from "cookies-next";
import { ActivityIndicator } from "./components/ActivityIndicator";
const LoginPage = React.lazy(() => import("./pages/auth/login/index"));

function App() {
  // const user = JSON.parse(getCookie("user") as string);

  const loading = () => (
    <ActivityIndicator color="#fff" containerStyle={{ minHeight: 800 }} />
  );
  return (
    <Router>
      <React.Suspense fallback={loading()}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path={`/`} element={<HomePage />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}

const HomePage = () => {
  const { onGetUsers, users } = useHome();

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
