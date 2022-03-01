import axios, { AxiosResponse } from "axios";
import { CONFIG } from "../../../config/settings";
import {
  API_ENDPOINT_REGENERATE_ID,
  API_ENDPOINT_REGENERATE_FOREIGNER_ID,
  API_ENDPOINT_REGENERATE_BIRTH_REG_ID,
} from "./../config/constant";

/**
 * Default API key is set for axios globally
 */
axios.defaults.baseURL = CONFIG.API_BASE_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${CONFIG.API_TOKEN}`;

export const regenerateID = async (data) => {
  let url = `${API_ENDPOINT_REGENERATE_ID}`;
  const axiosResponse = await axios.post(url, data);
  return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};

export const regenerateForeignerID = async (data) => {
  let url = `${API_ENDPOINT_REGENERATE_FOREIGNER_ID}`;
  const axiosResponse = await axios.post(url, data);
  return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};

export const regenerateBirthRegID = async (data) => {
  let url = `${API_ENDPOINT_REGENERATE_BIRTH_REG_ID}`;
  const axiosResponse = await axios.post(url, data);
  return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};
