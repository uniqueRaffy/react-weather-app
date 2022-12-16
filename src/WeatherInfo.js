import React from "react";
import WeatherTemp from "./WeatherTemp";
import DisplayDate from "./DisplayDate";

export default function WeatherInfo(props) {
  return (
    <div className="Weatherinfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DisplayDate date={props.data.date} />
        </li>
        <li className="text-captilize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img
              src={props.data.weatherIcon}
              alt={props.data.description}
              className="float-left"
            />
            <div className="float-left">
              <WeatherTemp celcius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
