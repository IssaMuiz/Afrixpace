import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="bg-[#080808] min-h-screen w-auto">
      <App />
      <ToastContainer position="bottom-left" autoClose={3000} />
    </div>
  </React.StrictMode>
);
