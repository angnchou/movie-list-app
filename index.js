import App from "./app.js";
import movies from "./data.js";
// import React from "react";
// import ReactDOM from "react-dom";

ReactDOM.render(<App movies={movies} />, document.getElementById("app"));
