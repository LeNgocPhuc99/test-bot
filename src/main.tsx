import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { PrivyProvider } from "@privy-io/react-auth";

import PixelTheme from "./core/themes/PixelTheme";

import { zkCandyTestnet } from "./chain";

// ** MUI Import
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const socials: Array<
  | "email"
  | "wallet"
  | "google"
  | "apple"
  | "farcaster"
  | "sms"
  | "twitter"
  | "github"
  | "tiktok"
  | "linkedin"
  | "telegram"
> = ["email", "sms", "wallet"];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PrivyProvider
    appId="cm1rorj8a07jlxtakudjk2rvv"
    config={{
      defaultChain: zkCandyTestnet,
      supportedChains: [zkCandyTestnet],
      loginMethods: socials,
      appearance: {
        theme: "dark",
        accentColor: "#676FFF",
        landingHeader: "Log in or sign up",
        loginMessage: "ZKCandy",
        walletList: ["metamask", "rainbow", "wallet_connect"],
        showWalletLoginFirst: false,
      },
      embeddedWallets: {
        createOnLogin: "users-without-wallets",
      },
    }}
  >
    <ThemeProvider theme={createTheme(PixelTheme("dark"))}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </PrivyProvider>
);
