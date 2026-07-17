import { createRoot } from "react-dom/client";
import { HelmetProvider } from "@/lib/helmet";
import { TrackingProvider } from "./utils/TrackingContext";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <TrackingProvider>
      <App />
    </TrackingProvider>
  </HelmetProvider>
);
