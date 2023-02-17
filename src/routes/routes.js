import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from '../containers/Login';
import Register from '../containers/Register';

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
