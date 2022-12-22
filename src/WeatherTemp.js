import React from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
  return (
    <div className="WeatherTemp">
      <span className="temperature">{Math.round(props.celcius)}</span>
      <span className="unit">°C</span>
    </div>
  );
}
