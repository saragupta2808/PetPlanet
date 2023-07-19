import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./context/user/userContext";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);
