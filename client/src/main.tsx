import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
