import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import LoginPage from "./Components/MenuListComponents/LoginPage.jsx";
import SignupPage from "./Components/MenuListComponents/SignupPage.jsx";
import Wishlist from "./Components/MenuListComponents/Wishlist.jsx";
import Profile from "./Components/MenuListComponents/Profile.jsx";
import ProductPage from "./Components/ProductPage.jsx/ProductPage.jsx";
import ProductCard from "./Components/ProductPage.jsx/ProductCard.jsx";
import WishlistCard from "./Components/MenuListComponents/WishlistCard.jsx";
import Cart from "./Components/MenuListComponents/Cart/Cart.jsx";
import Delivery from "./Components/ProductPage.jsx/Delivery.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },

      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },

      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "card",
        element: <ProductCard />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "/category",
        element: <ProductPage />,
      },
      {
        path: "/wish",
        element: <WishlistCard />,
      },
      {
        path: "/delivery",
        element: <Delivery />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
//
