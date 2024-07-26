import { convertTemp } from "./utils.js";

const loadWeather = (data) => {
  const currentWeather = document.querySelector(".current-weather-container");

  const location = document.createElement("h2");
  location.textContent = `${data.resolvedAddress}`;

  const currentTemp = document.createElement("h1");
  currentTemp.textContent = `${convertTemp(data.currentConditions.temp)} °F`;

  const currentCondition = document.createElement("p");
  currentCondition.textContent = `${data.currentConditions.conditions}`;

  currentWeather.appendChild(location);
  currentWeather.appendChild(currentTemp);
  currentWeather.appendChild(currentCondition);
};

export { loadWeather };
