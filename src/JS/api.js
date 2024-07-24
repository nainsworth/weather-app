const key = "PNXY24FCQNFAM9JV5G8Y3Y7V5";

const getLocation = () => {};

// Creates URL
// Request is location
// const generateURL = (location) => {
//   // Default 15 days Example
//   // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/70364?unitGroup=metric&key=PNXY24FCQNFAM9JV5G8Y3Y7V5&contentType=json

//   // Date Range Example
//   // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/70364/2024-07-19/2024-08-09?unitGroup=metric&key=PNXY24FCQNFAM9JV5G8Y3Y7V5&contentType=json
//   // const myURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${request}/${dateStart}/${dateEnd}?key=${key}`;
//   const myURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${key}&contentType=json`;
//   console.log(myURL, { mode: "cors" });

//   return (request = new Request(myURL, { mode: "cors" }));
// };

// Fetches Data from Weather API
async function fetchData(request) {
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${request}?unitGroup=metric&key=${key}&contentType=json`;

  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

const currentWeather = (data) => {
  const weatherObj = {
    condition: data.currentConditions.conditions,
    temp: data.currentConditions.temp,
    feelslike: data.currentConditions.feelslike,
    humidity: data.currentConditions.humidity,
    windspeed: data.currentConditions.windspeed,
    windgust: data.currentConditions.windgust,
    uvindex: data.currentConditions.uvindex,
    uvindex: data.currentConditions.uvindex,
  };
}


// //  Loads API
// const loadAPI = () => {
//   // fetchData(generateURL);
//   console.log(fetchData(70364));
// };

export default fetchData;
