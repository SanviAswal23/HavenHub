const axios = require("axios");

module.exports = async function geocode(location, country) {
  try {
    const query = `${location}, ${country}`;

    const response = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          q: query,
          format: "json",
          limit: 1,
        },
        headers: {
          "User-Agent": "HavenHubApp/1.0 (aswal.sanvi8@gmail.com)", 
        },
      }
    );

    const data = response.data;

    if (!data || data.length === 0) {
      console.log(`No results for ${query}`);
      return null;
    }

    const lon = parseFloat(data[0].lon);
    const lat = parseFloat(data[0].lat);

    return {
      type: "Point",
      coordinates: [lon, lat],
    };

  } catch (err) {
    console.log("Geocoding failed:", err.message);
    return null;
  }
};