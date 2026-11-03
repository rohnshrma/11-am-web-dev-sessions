import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

// NOTE: <StrictMode> is intentionally NOT used here.
// In dev, StrictMode renders every component twice, which would make the
// render counters in this demo jump by 2 and confuse the lesson.
createRoot(document.getElementById("root")).render(<App />);
