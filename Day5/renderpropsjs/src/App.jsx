import React, { useState } from "react";
import Kelvin from "./Kelvin";
import Fahrenheit from "./Fahrenheit";
import "./App.css";

function Input(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {props.render(value)}
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <Input 
        render={value => (
          <>
            <Fahrenheit value={value} />
            <Kelvin value={value} />
          </>
        )}
      />
    </div>
  )
}

