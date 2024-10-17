import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import Challenge1 from "./Challenge1.jsx";
import Challenge2 from "./Challenge2.jsx";
import Challenge3 from "./Challenge3.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Challenge1 />
    <hr />
    <Challenge2 />
    <hr />
    <Challenge3 />
  </StrictMode>
);
