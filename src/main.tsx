import React from "react";
import ReactDOM from "react-dom/client";

// recoil
import { RecoilRoot } from "recoil";

// notistick
import { SnackbarProvider } from "notistack";

// mui
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <SnackbarProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </SnackbarProvider>
    </RecoilRoot>
  </React.StrictMode>
);
