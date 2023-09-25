import API from './base';

export const signUp = (signUpData: SignupForm) =>
	API.post<User>('/user-service/users/join', signUpData).then((res) => console.log(res.data));

export const login = (loginData: LoginForm) => API.post<User>('/user-service/login', loginData).then((res) => res.data);

export const logout = () => API.post('/user-service/users/logout').then((res) => console.log(res.data));
