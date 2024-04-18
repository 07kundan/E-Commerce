import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Card from "./Components/Mohit/Card.jsx";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Home />,
    children: [],
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
    element: (
      <div>
        <h1>login</h1>
      </div>
    ),
  },
  {
    path: "cart",
    element: (
      <div>
        <h1>cart</h1>
      </div>
    ),
  },
  {
    path: "card",
    element: <Card />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
