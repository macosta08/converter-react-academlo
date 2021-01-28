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
    const valueCelsius =
      target.value === "" ? target.value : Number(target.value);
    const valueRadians =
      target.value === "" ? target.value : celsiusToRadians(valueCelsius);
    setCelsius(valueCelsius);
    setRadians(valueRadians);
  };

  const hadleInputChangeRadians = ({ target }) => {
    const valueRadians =
      target.value === "" ? target.value : Number(target.value);
    const valueCelsius =
      target.value === "" ? target.value : radiansToCelsius(valueRadians);
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
