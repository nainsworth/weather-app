const key = "PNXY24FCQNFAM9JV5G8Y3Y7V5";

const getLocation = () => {};

// Creates URL
// Request is location
const generateURL = (request, dateStart, dateEnd) => {
  // Default 15 days Example
  // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/70364?unitGroup=metric&key=PNXY24FCQNFAM9JV5G8Y3Y7V5&contentType=json

  // Date Range Example
  // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/70364/2024-07-19/2024-08-09?unitGroup=metric&key=PNXY24FCQNFAM9JV5G8Y3Y7V5&contentType=json
  const myURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${request}/${dateStart}/${dateEnd}?key=${key}`;

  return (request = new Request(myURL, { mode: "cors" }));
};

// Fetches Data from Weather API
async function fetchData(request) {
  //   try {
  //     const response = await fetch(request);
  //     if (!response.ok) {
  //       throw new Error("Network response was not OK");
  //     }
  //     const myJSON = await response.json();
  //     img.src = myJSON.data.images.original.url;
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
}
