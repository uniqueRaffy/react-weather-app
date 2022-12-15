import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos" />
        <footer>
          This Project was coded by Rafiat Salewa and it is an{" "}
          <a
            href="https://github.com/uniqueRaffy/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
