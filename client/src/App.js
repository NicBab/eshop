import "./App.css";
import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  Home,
  ProductList,
  Product,
  Register,
  Login,
  Cart,
  Success
} from "./pages/index";

function App() {
  const user = useSelector((state) => state.user.currentUser)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ?  <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;
