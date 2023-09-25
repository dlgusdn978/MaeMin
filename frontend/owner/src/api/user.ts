/* eslint-disable @typescript-eslint/no-explicit-any */
import API from './base';
import axios from 'axios';

export const signUp = (signUpData: SignupForm) =>
	API.post<User>('/user-service/users/join', signUpData).then((res) => console.log(res.data));

export const login = async (loginData: LoginForm) => {
	try {
		const res = await API.post<LoginRes>('/user-service/login', loginData);
		console.log(res.data);

		localStorage.setItem('access_token', res?.data?.data.accessToken);
		localStorage.setItem('expired_time', res?.data?.data.expiredTime);
	} catch (error) {
		// 에러 핸들링을 여기에 추가할 수 있습니다.
		console.error('로그인에 실패했습니다.', error);
	}
};

export const logout = () => API.post('/user-service/auth/logout').then((res) => console.log(res.data));

export const reissue = () =>
	axios
		.get('/user-service/auth/reissue', {
			headers: {
				'X-AUTH-TOKEN': `${localStorage.getItem('access_token')}`,
			},
		})
		.then((res) => console.log(res.data))
		.catch((e) => console.log(e));
