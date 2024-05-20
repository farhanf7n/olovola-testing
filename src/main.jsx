import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n/i18next.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback="loading...">
      <App />
    </React.Suspense>
  </React.StrictMode>
);
