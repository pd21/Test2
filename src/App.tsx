import React from "react";
import ReactDOM from "react-dom";
import { Image } from "./components/Image";
import Form from "./components/Form";

if (process.env.NODE_ENV !== "production") {
  const axe = require("@axe-core/react");
  axe(React, ReactDOM, 1000);
}

function App() {
  return (
    <div>
      <div>hello</div>
      <Image />
      <Form />
    </div>
  );
}

export default App;
