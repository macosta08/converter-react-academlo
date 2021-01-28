import React, { useState } from "react";

export const Converter = () => {
  const [celsius, setCelsius] = useState("");
  const [radians, setRadians] = useState("");

  const celsiusToRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  };

  const radiansToCelsius = (radians) => {
    return radians * (180 / Math.PI);
  };

  const hadleInputChangeCelsius = ({ target }) => {
    const val = target.value;
    const valueCelsius = val === "" ? val : Number(val);
    const valueRadians = val === "" ? val : celsiusToRadians(valueCelsius);
    setCelsius(valueCelsius);
    setRadians(valueRadians);
  };

  const hadleInputChangeRadians = ({ target }) => {
    const val = target.value;
    const valueRadians = val === "" ? val : Number(val);
    const valueCelsius = val === "" ? val : radiansToCelsius(valueRadians);
    setRadians(valueRadians);
    setCelsius(valueCelsius);
  };
  return (
    <div>
      <h1>Converter</h1>
      <label>Celsius Degrees</label>
      <br />
      <input
        type="number"
        className="input-celsius"
        placeholder="Celsius Degrees"
        autoComplete="off"
        name="celsius"
        value={celsius}
        onChange={hadleInputChangeCelsius}
      />
      <p>=</p>
      <label>Radians</label>
      <br />
      <input
        type="number"
        className="input-radians"
        placeholder="Radians"
        autoComplete="off"
        name="radians"
        value={radians}
        onChange={hadleInputChangeRadians}
      />
    </div>
  );
};
