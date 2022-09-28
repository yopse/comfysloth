import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from "./pages";
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar></Navbar>
        <Sidebar></Sidebar>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="about" element={<About></About>}></Route>{" "}
          <Route path="cart" element={<Cart></Cart>}></Route>{" "}
          <Route path="products" element={<Home></Home>}></Route>
          <Route
            path="products/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <Checkout></Checkout>
              </PrivateRoute>
            }
          ></Route>
          <Route path="error" element={<Error></Error>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </AuthWrapper>
  );
}

export default App;
