import "../assets/styles/main.scss";
import { fetchWeatherData, fetchLocationData } from "./api.js";
import { loadWeather, updateWeather } from "./weather.js";
import { convertZip, validateZip, loadDefault } from "./utils.js";

// fetchData(70364);
let location = "New Orleans";

const updateLocation = (data) => {
  location = data;
};

const handleSearch = () => {
  const locationSearch = document.getElementById("locationSearch");
  const searchBtn = document.getElementById("searchBtn");

  searchBtn.addEventListener("click", () => {
    updateLocation(locationSearch.value);
    loadResults();
    locationSearch.value = "";
  });
};

const loadResults = () => {
  fetchLocationData(location).then((data) => {
    if (validateZip(location)) {
      convertZip(data);
    } else {
      fetchWeatherData(location).then((data) => {
        updateWeather(data);
      });
    }
  });
};

loadDefault();
handleSearch();
