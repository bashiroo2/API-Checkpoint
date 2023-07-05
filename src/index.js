import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Create a root using the createRoot function
const root = createRoot(rootElement);

// Render the App component within a StrictMode
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
