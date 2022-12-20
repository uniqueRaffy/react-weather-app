import React from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.dailyForecast.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function maxTemp() {
    let temperature = Math.round(props.dailyForecast.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.dailyForecast.temperature.minimum);
    return `${temperature}°`;
  }

  return (
    <div className="ForecastDay">
      <div className="forecastDay">{day()}</div>
      <div className="forecastIcon">
        <img
          src={props.dailyForecast.condition.icon_url}
          alt={props.dailyForecast.condition.description}
        />
      </div>
      <span className="forecastTemp-max">{maxTemp()}</span>
      <span className="forecastTemp-min">{minTemp()}</span>
    </div>
  );
}
