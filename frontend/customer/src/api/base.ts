import axios from 'axios';

const API = axios.create({
	// baseURL: process.env.REACT_APP_BASE_URL,
	baseURL: 'https://j9c208.p.ssafy.io',
});

API.interceptors.request.use(function (config) {
	// const token = storage.getEntry('token') as string | null;
	config.headers = config.headers ?? {};
	// config.headers['Authorization'] = token ?? '';
	return config;
});

export default API;
