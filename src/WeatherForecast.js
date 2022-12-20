import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleresponse(response) {
    console.log(response.data);
  }

  let lon = props.weatherDetails.lon;
  let lat = props.weatherDetails.lat;
  const apiKey = "408f93ot3819579ad9b08ac7493b018e";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleresponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thur</div>
          <div className="forecastIcon">
            <img
              src={props.weatherDetails.weatherIcon}
              alt={props.weatherDetails.description}
            />
          </div>
          <span className="forecastTemp-max">15°</span>
          <span className="forecastTemp-min">13°</span>
        </div>
      </div>
    </div>
  );
}
