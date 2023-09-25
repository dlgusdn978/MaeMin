import axios, { AxiosResponse } from 'axios';

const API = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

axios.defaults.baseURL = 'https://j9c208.p.ssafy.io';
axios.defaults.withCredentials = true;

const accessToken = localStorage.getItem('access_token');
const refreshToken = localStorage.getItem('refresh_token');

/** 1. 요청 전 - access토큰있는데 만료되면 refresh토큰도 헤더담아서 요청보내기 */
API.interceptors.request.use(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	(config: any) => {
		if (accessToken) {
			/** 2. access토큰 있으면 만료됐는지 체크 */
			if (!accessToken) {
				/** 3. 만료되면 만료된 access, refresh 같이 헤더 담아서 요청 */
				config.headers!.Authorization = `${accessToken}`;
				config.headers!.Refresh = `${refreshToken}`;
			} else {
				config.headers!.Authorization = `${accessToken}`;
			}
		}
		return config;
	},
	(error) => Promise.reject(error),
);

/** 4. 응답 전 - 새 access토큰받으면 갈아끼기 */
API.interceptors.response.use(
	async (response: AxiosResponse) => {
		if (response.headers.authorization) {
			const newAccessToken = response?.headers?.authorization;
			localStorage.removeItem('access_token'); // 만료된 access토큰 삭제
			localStorage.setItem('access_token', newAccessToken); // 새걸로 교체
			response.headers = {
				authorization: `${newAccessToken}`,
			};
		}
		return response;
	},
	(error) => {
		//응답 200 아닌 경우 - 디버깅
		return Promise.reject(error);
	},
);

export default API;
