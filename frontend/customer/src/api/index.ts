import axios from 'axios';

export const API = axios.create({
	// baseURL: 'https://j9c208.p.ssafy.io/customer',
	baseURL: 'http://localhost:3000/customer',
	headers: {
		'Content-Type': 'application/json',
	},
});
