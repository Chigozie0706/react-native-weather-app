import axios from "axios";
import { apiKey } from "../constants";

const foreCastEndPoint = (
  params
) => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no
`;

const locationEndPoint = (
  params
) => `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}
`;

const apiCall = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

const fetchWeatherForeCast = (params) => {
  // let foreCastUrl = foreCastEndPoint(params)
  return apiCall(foreCastEndPoint(params));
};

const fetchLocations = (params) => {
  // let foreCastUrl = foreCastEndPoint(params)
  return apiCall(locationEndPoint(params));
};
