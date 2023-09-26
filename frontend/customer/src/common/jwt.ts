/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from 'moment';

const ACCESS_TOKEN = 'accessToken';
const EXPIRED_TIME = 'expiredTime';
const tag = '[jwt]';

export default {
	getToken() {
		return localStorage.getItem(ACCESS_TOKEN);
	},
	saveToken(token: any) {
		localStorage.setItem(ACCESS_TOKEN, token);
	},
	getExpiredTime() {
		return localStorage.getItem(EXPIRED_TIME);
	},
	saveExpiredTime(expiredTime: any) {
		localStorage.setItem(EXPIRED_TIME, expiredTime);
	},
	destroyAll() {
		localStorage.removeItem(ACCESS_TOKEN);
		localStorage.removeItem(EXPIRED_TIME);
	},
	isExpired() {
		if (this.getToken() === null) return true;
		if (this.getExpiredTime() === null) return true;
		const expiredTime = this.getExpiredTime();
		const expiredMoment = moment(expiredTime);
		const currentMoment = moment();

		const difference = moment.duration(expiredMoment.diff(currentMoment)).asSeconds();

		console.log(tag, 'expireMoment = ', expiredMoment, 'currentMoment = ', currentMoment, 'diff = ', difference);

		// 만료 30초 전일 경우 만료로 판단
		return difference <= 30;
	},
};
