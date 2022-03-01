import axios from 'axios';
import { CONFIG } from '../../../config/settings';
import { API_ENDPOINT_GET_SETTINGS } from '../config/constant';

/**
 * Default API key is set for axios globally
 */
axios.defaults.baseURL = CONFIG.API_BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${CONFIG.API_TOKEN}`;

export const getSettings = async (data) => {
	let url = `${API_ENDPOINT_GET_SETTINGS}`;
	const axiosResponse = await axios.post(url, data);
	return axiosResponse && axiosResponse.data ? axiosResponse.data : null;
};
