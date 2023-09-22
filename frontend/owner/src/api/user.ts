import API from './base';

export const signUp = (signUpData: SignupForm) => API.post<User>('/user-service/users/join', signUpData);
