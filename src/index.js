import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
// dev - qj07rra5.us.auth0.com;
ReactDOM.render(
  <Auth0Provider
    domain="dev - qj07rra5.us.auth0.com"
    clientId="CpwogLdwZ1k1x4F9E1ETB7L2NJaWhI5d"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);

// CpwogLdwZ1k1x4F9E1ETB7L2NJaWhI5d;

// P7UeVb5dePXju0pX60uXllwuU6q3mNeNsHFxrM4pee4iswBQxax5SEMOcRbyyPJC;
