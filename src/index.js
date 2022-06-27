import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./theme";
import "./assets/css/styles.css";
import { BrowserRouter } from "react-router-dom";
import ContextsProvider from "./contexts";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ContextsProvider>
          <App />
        </ContextsProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
