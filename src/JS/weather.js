import { convertTemp } from "./utils.js";

const currentWeather = document.querySelector(".current-weather-container");
const location = document.createElement("h2");
const currentTemp = document.createElement("h1");
const currentCondition = document.createElement("p");

const loadWeather = (data) => {
  console.log(data.days);

  updateWeather(data);
  currentWeather.appendChild(location);
  currentWeather.appendChild(currentTemp);
  currentWeather.appendChild(currentCondition);
};

const updateWeather = (data) => {
  location.textContent = `${data.resolvedAddress}`;
  currentTemp.textContent = `${convertTemp(data.currentConditions.temp)}°`;
  currentCondition.textContent = `${data.currentConditions.conditions}`;

  generateForecast(data);
};

const generateForecast = (data) => {
  const futureWeather = document.querySelector(".future-weather-container");
  futureWeather.innerHTML = "";

  const title = document.createElement("h2");
  title.classList.add("title");
  title.innerText = "10 Day Forecast";

  futureWeather.appendChild(title);

  for (let i = 1; i <= 10; i++) {
    const date = new Date(data.days[i].datetime);
    const weekday = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    }).format(date);
    const weekdate = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
    }).format(date);

    const futureWeatherItem = document.createElement("div");
    const forecastDate = document.createElement("p");
    const forecastCondition = document.createElement("p");
    const forecastTemp = document.createElement("h2");

    futureWeatherItem.classList.add("future-weather-item");

    forecastDate.textContent = `${weekday} ${weekdate}`;
    forecastCondition.textContent = `${data.days[i].conditions}`;
    forecastTemp.textContent = `${convertTemp(data.days[i].temp)}°`;

    futureWeather.appendChild(futureWeatherItem);
    futureWeatherItem.appendChild(forecastDate);
    futureWeatherItem.appendChild(forecastCondition);
    futureWeatherItem.appendChild(forecastTemp);
  }
};

export { loadWeather, updateWeather };
