import { API } from './index';

// 자체 페이 가입(간편 비밀번호 등록)
export const userPayRegist = (payPw) => {
	return API.post('/pay/user', { payPw });
};
// 자체 페이 조회
export const userPayCheck = () => {
	return API.get('/pay');
};

// 자체 페이 카드 등록
export const userPayCardRegist = (cardNumber, cardExpireDate, cvc, cardPw) => {
	return API.post('/pay', {
		cardNumber,
		cardExpireDate,
		cvc,
		cardPw,
	});
};
