import axios from "axios";

const asteroidsUrl =
  "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY";
const pictureOfTheDayUrl =
  "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

export const getAsteroids = async (page = 0) => {
  const response = await axios.get(asteroidsUrl + `&page=${page}`);
  return response.data;
};

export const getPictureData = async (date) => {
  const formatedDate = date.toISOString().split("T")[0];
  const response = await axios.get(
    pictureOfTheDayUrl + `&date=${formatedDate}`
  );
  return response.data;
};
