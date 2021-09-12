import React from "react";
import ReactDOM from "react-dom";

// Generals styles
import "./assets/styles/globals.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
