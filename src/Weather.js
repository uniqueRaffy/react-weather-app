import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function showResponse(response) {
    setWeatherData({
      ready: true,
      lon: response.data.coordinates.longitude,
      lat: response.data.coordinates.latitude,
      temperature: response.data.temperature.current,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      weatherIcon: response.data.condition.icon_url,
    });
  }

  function search() {
    const apiKey = "408f93ot3819579ad9b08ac7493b018e";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);
  }

  function displayInfo(event) {
    event.preventDefault();
    search();
  }

  function showCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        {" "}
        <form onSubmit={displayInfo}>
          <div className="row ">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city....."
                className="form-control"
                autoFocus="on"
                onChange={showCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-success w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />{" "}
        <WeatherForecast weatherDetails={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading the app......";
  }
}
