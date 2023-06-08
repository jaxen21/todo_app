import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";
import { MantineProvider } from "@mantine/core";
import { AuthProvider } from "./AuthContext";
import { AuthContext } from "./AuthContext";

const App = () => {
  return (
    <MantineProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedDashboard />} />
          </Routes>
        </AuthProvider>
      </Router>
    </MantineProvider>
  );
};

const ProtectedDashboard = () => {
  const { loggedIn } = useContext(AuthContext);

  return loggedIn ? <Dashboard /> : <Navigate to="/" replace />;
};

export default App;
