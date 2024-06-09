import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import "./i18n"

import PixelTheme from "./core/themes/PixelTheme";

// ** MUI Import
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={createTheme(PixelTheme("dark"))}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
