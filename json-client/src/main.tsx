import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/src/App";

import { ModalProvider } from "@/src/contexts/export";

import "@/src/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ModalProvider>
    <App />
  </ModalProvider>
);
