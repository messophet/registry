import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Auth/AuthContext";
import Home from "./Home";
import Contact from "./Contact";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import ConfirmSignUp from "./Auth/ConfirmSignUp";
import Profile from "./Auth/UserProfile";
import ForgotPassword from "./Auth/ForgotPassword";
import ResetPassword from "./Auth/ResetPassword";
import RouteGuard from "./RouteGuard";
import ResponsiveAppBar from "./AppBar.jsx";
import { createTheme } from '@mui/material/styles';
import { amber } from '@mui/material/colors';
import Logout from "./Auth/Logout";

const theme = createTheme({
    palette: {
        primary: {
            main: amber[500],
        },
        secondary: {
            main: '#11cb5f',
        },
    },
});

function App() {
  return (
      <AuthProvider>
          {/*<ThemeProvider theme={theme}>*/}
              <Router>
                  <ResponsiveAppBar position='fixed' />
                  <main>
                      <Routes>
                          <Route
                              path="/"
                              element={
                                  <RouteGuard>
                                      <Home />
                                  </RouteGuard>
                              }
                          />
                          <Route path="/about" element={<Profile />} />
                          <Route path="/contact" element={<Contact />} />
                          <Route path="/signup" element={<SignUp />} />
                          <Route path="/confirm" element={<ConfirmSignUp />} />
                          <Route path='/login' element={<Login />} />
                          <Route
                              path="/profile"
                              element={
                                  <RouteGuard>
                                      <Profile />
                                  </RouteGuard>
                              }
                          />
                          <Route
                              path="/logout"
                              element={
                                  <RouteGuard>
                                      <Logout />
                                  </RouteGuard>
                              }
                          />
                          <Route path="/forgot-password" element={<ForgotPassword />} />
                          <Route path="/reset-password" element={<ResetPassword />} />
                      </Routes>
                  </main>
              </Router>
          {/*</ThemeProvider>*/}
      </AuthProvider>
  )
}

export default App
