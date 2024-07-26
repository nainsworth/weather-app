import { fetchWeatherData } from "./api.js";
import { loadWeather } from "./weather.js";

const convertTemp = (temp) => {
  return (temp * (9 / 5) + 32).toFixed(0);
};

const validateZip = (zip) => {
  if (/^[0-9]{5}(?:-[0-9]{4})?$/.test(zip)) {
    return true;
  } else {
    return false;
  }
};

const convertZip = (data) => {
  fetchWeatherData(data.results[0].formatted_address).then((data) => {
    loadWeather(data);
  });
};

const loadDefault = () => {
  fetchWeatherData("New Orleans").then((data) => {
    loadWeather(data);
  });
};

export { convertTemp, convertZip, loadDefault, validateZip };
