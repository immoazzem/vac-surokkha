import axios, { AxiosResponse } from "axios";
import { CONFIG } from "../../../config/settings";
import {
  API_ENDPOINT_NID_VERIFY,
  API_ENDPOINT_CENTERS,
  API_ENDPOINT_VACCINE_FORM_SUBMIT,
  API_ENDPOINT_SEND_OTP,
  API_ENDPOINT_VERIFY_OTP,
  API_ENDPOINT_UNIONS,
  API_ENDPOINT_FOREIGNER_VACCINE_FORM_SUBMIT,
  API_ENDPOINT_FOREIGNER_VERIFY,
  API_ENDPOINT_FOREIGNER_VERIFY_OTP,
  API_ENDPOINT_VERIFY_OTP_FOR_FOREIGNER,
  API_ENDPOINT_SEND_OTP_FOR_FOREIGNER,
  API_ENDPOINT_BIRTH_REG_VERIFY,
  API_ENDPOINT_BIRTH_REG_VACCINE_FORM_SUBMIT,
  API_ENDPOINT_BIRTH_REG_VERIFY_OTP,
  API_ENDPOINT_SEND_OTP_FOR_BIRTH_REG,
} from "./../config/constant";

/**
 * Default API key is set for axios globally
 */
axios.defaults.baseURL = CONFIG.API_BASE_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${CONFIG.API_TOKEN}`;

export const verifyNID = async (data) => {
  let url = `${API_ENDPOINT_NID_VERIFY}`;
  const axiosResponse = await axios.post(url, data);
  return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};

export const getCenters = async (data) => {
  let url = `${API_ENDPOINT_CENTERS}`;
  const axiosResponse = await axios.get(url, { params: data });
  return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};

export const getUnions = async (data) => {
  let url = `${API_ENDPOINT_UNIONS}`;
  const axiosResponse = await axios.get(url, { params: data });
  return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};

export const saveVaccineEntry = async (data) => {
  let url = `${API_ENDPOINT_VACCINE_FORM_SUBMIT}`;
  const axiosResponse = await axios.post(url, data);
  return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};

export const sendOTP = async (data) => {
  let url = `${API_ENDPOINT_SEND_OTP}`;
  const axiosResponse = await axios.get(url, { params: data });
  return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};

export const sendOTPForForeigner = async (data) => {
  let url = `${API_ENDPOINT_SEND_OTP_FOR_FOREIGNER}`;
  const axiosResponse = await axios.get(url, { params: data });
  return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};

export const verifyOTP = async (data) => {
  let url = `${API_ENDPOINT_VERIFY_OTP}`;
  const axiosResponse = await axios.post(url, data);
  return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};

export const saveForeignerVaccineEntry = async (data) => {
  let url = `${API_ENDPOINT_FOREIGNER_VACCINE_FORM_SUBMIT}`;
  const axiosResponse = await axios.post(url, data);
  return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};

export const verifyForeigner = async (data) => {
  let url = `${API_ENDPOINT_FOREIGNER_VERIFY}`;
  const axiosResponse = await axios.post(url, data);
  return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};

export const verifyForeignerOTP = async (data) => {
  let url = `${API_ENDPOINT_FOREIGNER_VERIFY_OTP}`;
  const axiosResponse = await axios.post(url, data);
  return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};

export const verifyBirthReg = async (data) => {
  let url = `${API_ENDPOINT_BIRTH_REG_VERIFY}`;
  const axiosResponse = await axios.post(url, data);
  return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};

export const saveBirthRegVaccineEntry = async (data) => {
  let url = `${API_ENDPOINT_BIRTH_REG_VACCINE_FORM_SUBMIT}`;
  const axiosResponse = await axios.post(url, data);
  return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};

export const verifyBirthRegOTP = async (data) => {
  let url = `${API_ENDPOINT_BIRTH_REG_VERIFY_OTP}`;
  const axiosResponse = await axios.post(url, data);
  return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};

export const sendOTPForBirthReg = async (data) => {
  let url = `${API_ENDPOINT_SEND_OTP_FOR_BIRTH_REG}`;
  const axiosResponse = await axios.get(url, { params: data });
  return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};
