import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import MainRoute from "./Routes/MainRoute/MainRoute.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={MainRoute} />
    </UserContextProvider>
  </React.StrictMode>
);
