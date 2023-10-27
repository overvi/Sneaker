import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const colors = {
  orange: {
    100: "hsl(26, 100%, 55%)",
    200: "hsl(25, 100%, 94%)",
  },

  blue: {
    100: "hsl(220, 13%, 13%)",
    200: "hsl(219, 9%, 45%)",
    300: "hsl(220, 14%, 75%)",
    400: "hsl(223, 64%, 98%)",
  },
};

export const breakpoints = {
  base: "0em",
  sm: "400px",
  lg: "1070px",
};

const fonts = {
  body: "Kumbh Sans, sans-serif",
};

const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
