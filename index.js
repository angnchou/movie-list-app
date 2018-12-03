import App from "./app.js";
import movies from "./data.js";
// import React from "react";
// import ReactDOM from "../node_modules/react-dom/dist/react-dom.js";

ReactDOM.render(<App movies={movies} />, document.getElementById("app"));
