import "../assets/styles/main.scss";
import { fetchWeatherData, fetchLocationData } from "./api.js";
import { loadWeather } from "./weather.js";
import { convertZip, validateZip } from "./utils.js";

// fetchData(70364);
const zipcode = "70364";

fetchLocationData(zipcode).then((data) => {
  if (validateZip(zipcode)) {
    convertZip(data);
  } else {
    fetchWeatherData(zipcode).then((data) => {
      loadWeather(data);
    });
  }
});
