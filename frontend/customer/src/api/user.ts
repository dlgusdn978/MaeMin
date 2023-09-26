import API from './base';

interface LoginResponse {
	token: string;
	expiredTime: string;
}

export const signUp = (signUpData: SignupForm) =>
	API.post<User>('/user-service/users/join', signUpData).then((res) => console.log(res.data));

export const login = (loginData: LoginForm) =>
	API.post<LoginResponse>('/user-service/login', loginData).then((res) => res.data);

export const logout = () => API.post('/user-service/users/logout').then((res) => console.log(res.data));

//storedetail get
export const getStoreDetail = (storeId: number) =>
	API.get(`/store-service/customer/stores/${storeId}`).then((res) => res.data);
