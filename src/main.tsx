import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

try {
  createRoot(rootElement).render(<App />);
  console.log("React app rendered successfully");
} catch (error) {
  console.error("Error rendering React app:", error);
  rootElement.innerHTML = `
    <div style="padding: 20px; color: white; font-family: Arial;">
      <h1>Erro ao carregar a aplicação</h1>
      <p>${error instanceof Error ? error.message : "Erro desconhecido"}</p>
    </div>
  `;
}
