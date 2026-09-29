// "import" means: go grab a tool from somewhere else so we can use it here.

// createRoot is React's way of saying "this spot on the web page is yours to control".
import { createRoot } from "react-dom/client";

// App is our own main component (the big box that holds everything else).
// It lives in the App.jsx file right next to this one.
import App from "./App";

// Look in index.html for the empty <div id="root"></div>.
// That empty div is the stage; React will put our whole app on it.
const root = createRoot(document.getElementById("root"));

// Now actually put the App on the stage.
// <App /> is like writing a custom HTML tag that we made ourselves.
root.render(<App />);
