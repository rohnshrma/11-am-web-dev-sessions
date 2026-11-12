import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";

// TODO (Step 2): wrap <App /> in <BrowserRouter> and in your provider.
createRoot(document.getElementById("root")).render(<App />);
