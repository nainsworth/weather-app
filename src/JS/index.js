import "../styles/main.scss";
import { fetchWeatherData, fetchLocationData } from "./api.js";
import { loadWeather } from "./weather.js";

// fetchData(70364);
const zipcode = "70364";

fetchLocationData(zipcode).then((data) => {
  const city = `${data.results[0].address_components[1].long_name}`;
  const state = `${data.results[0].address_components[2].short_name}`;

  console.log(city, state);
});

fetchWeatherData(zipcode).then((data) => {
  loadWeather(data);
});
