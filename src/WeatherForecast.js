import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleresponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (daily, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay dailyForecast={daily} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let lon = props.weatherDetails.lon;
    let lat = props.weatherDetails.lat;
    const apiKey = "408f93ot3819579ad9b08ac7493b018e";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleresponse);
    return null;
  }
}
