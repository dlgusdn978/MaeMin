import API from './base';

export const sendSms = async (phoneNumber: string) => {
	try {
		const response = await API.post('/user-service/sms/send', {
			to: phoneNumber,
		});
		return response;
	} catch (error) {
		console.error('SMS 전송에 실패했습니다:', error);
		throw error;
	}
};

export const verifySms = async (phoneNumber: string, checkNum: string) => {
	try {
		const response = await API.post('/user-service/sms/send/auth', {
			to: phoneNumber,
			checkNum: checkNum,
		});
		if (response.data.success) {
			console.log('인증번호 확인 성공');
		} else {
			console.log('인증번호 확인 실패');
		}
		return response;
	} catch (error) {
		console.error('SMS 확인에 실패했습니다:', error);
		throw error;
	}
};
