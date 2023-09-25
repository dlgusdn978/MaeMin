import API from './index.js';

// 자체 페이 조회
export const userPayCheck = () => {
	return API.get('/pay');
};

// 자체 페이 등록
export const userPayRegist = (cardNumber, cardExpireDate, cvc, cardPw) => {
	return API.post('/pay', {
		cardNumber,
		cardExpireDate,
		cvc,
		cardPw,
	});
};
