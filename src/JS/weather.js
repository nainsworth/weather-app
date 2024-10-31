import { convertTemp } from "./utils.js";

const currentWeather = document.querySelector(".current-weather-container");
const location = document.createElement("h2");

const currentTemp = document.createElement("h1");

const currentCondition = document.createElement("p");

const loadWeather = (data) => {
  updateWeather(data);
  currentWeather.appendChild(location);
  currentWeather.appendChild(currentTemp);
  currentWeather.appendChild(currentCondition);
};

const updateWeather = (data) => {
  location.textContent = `${data.resolvedAddress}`;
  currentTemp.textContent = `${convertTemp(data.currentConditions.temp)} °F`;
  currentCondition.textContent = `${data.currentConditions.conditions}`;
};

export { loadWeather, updateWeather };
