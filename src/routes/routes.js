import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Home from '../containers/Home';
import PrivateRoute from './private-route';
import Products from '../containers/Products';

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/produtos"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
