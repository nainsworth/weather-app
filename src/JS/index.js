import "../assets/styles/main.scss";
import { fetchWeatherData, fetchLocationData } from "./api.js";
import { loadWeather } from "./weather.js";
import { displayCity, convertZip } from "./utils.js";

// fetchData(70364);
const zipcode = "70363";

fetchLocationData(zipcode).then((data) => {
  convertZip(data);
});

// fetchWeatherData(zipcode).then((data) => {
//   loadWeather(data);
// });
