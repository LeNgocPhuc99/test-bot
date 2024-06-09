import type { } from '@mui/material/themeCssVarsAugmentation';
import { ThemeOptions, alpha } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import * as Colors from '@mui/material/colors';

import "./PixelTheme.css"

declare module "@mui/material/styles/createPalette" {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange {}
}

export const primary = {
  50: "#F0F7FF",
  100: "#000000", // #CEE5FD
  200: "#00ffa3", // #9CCCFC
  300: "#00ffa3", // ##55A6F6
  400: "#00ffa3", // #0A66C2
  500: "#0959AA",
  600: "#064079",
  700: "#033363",
  800: "#00ffa3", // #02294F
  900: "#021F3B",
};

export const secondary = {
  50: "#F9F0FF",
  100: "#E9CEFD",
  200: "#D49CFC",
  300: "#B355F6",
  400: "#750AC2",
  500: "#fee600", // #6709AA
  600: "#490679",
  700: "#3B0363",
  800: "#2F024F",
  900: "#fee600", // #23023B
};

export const gray = {
  50: "#FBFCFE",
  100: "#EAF0F5",
  200: "#D6E2EB",
  300: "#BFCCD9",
  400: "#94A6B8",
  500: "#5B6B7C",
  600: "#4C5967",
  700: "#364049",
  800: "#131B20",
  900: "#090E10",
};

export const green = {
  50: "#F6FEF6",
  100: "#E3FBE3",
  200: "#C7F7C7",
  300: "#A1E8A1",
  400: "#51BC51",
  500: "#1F7A1F",
  600: "#136C13",
  700: "#0A470A",
  800: "#042F04",
  900: "#021D02",
};

const getDesignTokens = (mode: PaletteMode) => ({
  // shape: {
  //   borderRadius: 1,
  // },
  palette: {
    mode: mode,
    primary: {
      main: "#3294F6",
      ...(mode === "dark" && {
        contrastText: primary[100],
        light: primary[300],
        main: primary[400],
        dark: primary[800],
      }),
    },
    secondary: {
      main: "#9e9e9e",
      ...(mode === "dark" && {
        light: secondary[400],
        main: secondary[500],
        dark: secondary[900],
      }),
    },
    divider: mode === 'dark' ? "#fff" : "#fff",
    background: {
      default: '#fff',
      paper: Colors.grey[50],
      ...(mode === 'dark' && { default: gray[900], paper: gray[800] }),
    },
    text: {
      primary: gray[800],
      secondary: gray[600],
      ...(mode === 'dark' && { primary: '#fff', secondary: gray[400] }),
    },
    action: {
      selected: `${alpha(primary[200], 0.2)}`,
      ...(mode === 'dark' && {
        selected: alpha(primary[800], 0.2),
      }),
    },
  },
  typography: {
    fontFamily: ['"Press Start 2P", "Arial", "sans-serif"'].join(','),
    h1: {
      // fontSize: 60,
      fontWeight: 400,
      // lineHeight: 78 / 70,
      // letterSpacing: -0.2,
    },
    h2: {
      // fontSize: 48,
      fontWeight: 400,
      // lineHeight: 1.2,
    },
    h3: {
      fontWeight: 400,
      // fontSize: 42,
      // lineHeight: 1.2,
    },
    h4: {
      fontWeight: 400,
      // fontSize: 36,
      // lineHeight: 1.5,
    },
    h5: {
      // fontSize: 20,
      fontWeight: 400,
    },
    h6: {
      fontWeight: 400,
    },
    subtitle1: {
      fontWeight: 400,
    },
    subtitle2: {
      // fontSize: 16,
    },
    body1: {
      fontWeight: 400,
      // fontSize: 15,
    },
    body2: {
      fontWeight: 400,
      // fontSize: 14,
    },
    caption: {
      fontWeight: 400,
      // fontSize: 12,
    },
  }
});

export default function PixelTheme(mode: PaletteMode): ThemeOptions {
  return {
    ...getDesignTokens(mode),
    components: {
    }
  };
}