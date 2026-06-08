import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import NotificationProvider from "./context/NotificationProvider";

import TaskProvider from "./context/TaskProvider";

import "./styles/global.css";
import "./styles/toast.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotificationProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </NotificationProvider>
  </StrictMode>
);