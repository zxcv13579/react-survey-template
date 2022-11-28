import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./config/theme";
import SurveyProvider from "./context/SurveyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={customTheme}>
      <SurveyProvider>
        <App />
      </SurveyProvider>
    </ChakraProvider>
  </React.StrictMode>
);
