import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
} from "./pages";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Sidebar></Sidebar>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/about">
          <About> </About>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
        <Route path="/products">
          <Products></Products>
        </Route>
        <Route path="/products/:id" children={<SingleProduct />}></Route>

        <Route path="/checkout">
          <Checkout></Checkout>
        </Route>

        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
