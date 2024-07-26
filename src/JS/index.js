import "../assets/styles/main.scss";
import { fetchWeatherData, fetchLocationData } from "./api.js";
import { loadWeather } from "./weather.js";

// fetchData(70364);
const zipcode = "70364";

// fetchLocationData(zipcode);
// console.log(typeof location);

fetchWeatherData(zipcode).then((data) => {
  loadWeather(data);
});
