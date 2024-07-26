const WEATHER_API_KEY = "PNXY24FCQNFAM9JV5G8Y3Y7V5";
const GEOLOCATION_API_KEY = "AIzaSyC5CSdjxWA23tp6lPlt4Yx4ZMOJGuFt7fE";

// Fetches Data from Weather API
async function fetchWeatherData(request) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${request}?unitGroup=metric&key=${WEATHER_API_KEY}&contentType=json`;

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

// Fetches Data from Google Geolocation API
async function fetchLocationData(request) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${request}&key=${GEOLOCATION_API_KEY}`;

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

export { fetchLocationData, fetchWeatherData };
