import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Card from "./Components/Mohit/Card.jsx";
import LoginPage from "./Components/Mohit/LoginPage.jsx";
import Cart from "./Components/Mohit/Cart.jsx";
import SignupPage from "./Components/Mohit/SignupPage.jsx";
import Wishlist from "./Components/Mohit/Wishlist.jsx";
import Profile from "./Components/Mohit/Profile.jsx";
import Rewards from "./Components/Mohit/Rewards.jsx";
import ProductPage from "./Components/ProductPage.jsx/ProductPage.jsx";

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
        path: "about",
        element: (
          <div>
            <h1>about</h1>
          </div>
        ),
      },
      {
        path: "contact",
        element: (
          <div>
            <h1>contact</h1>
          </div>
        ),
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
        path: "rewards",
        element: <Rewards />,
      },
      {
        path: "card",
        element: <Card />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "/category",
        element: <ProductPage />,
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
