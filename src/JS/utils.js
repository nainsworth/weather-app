import { fetchWeatherData } from "./api.js";
import { loadWeather } from "./weather.js";

const convertTemp = (temp) => {
  return (temp * (9 / 5) + 32).toFixed(0);
};

const convertZip = (data) => {
  const city = data.results[0].address_components[1].long_name;
  const state = data.results[0].address_components[3].short_name;

  console.log(data);

  fetchWeatherData(`${city} ${state}`).then((data) => {
    loadWeather(data);
  });
};

console.log(location);
export { convertTemp, convertZip };
