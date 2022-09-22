import { render } from "@testing-library/react";
import React, { useState } from "react";

import App from "./App";

import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
