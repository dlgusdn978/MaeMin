import axios from 'axios';

const API = axios.create({
	baseURL: 'https://j9c208.p.ssafy.io/customer',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default API;
