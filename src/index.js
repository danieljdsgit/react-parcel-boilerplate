import React from "react";
import { render } from "react-dom";
import App from "./App";

const index = () => {
  return <App />;
};

render(<App />, document.getElementById("app"));
