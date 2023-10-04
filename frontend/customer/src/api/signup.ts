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
	console.log(phoneNumber);
	try {
		const response = await API.post('/user-service/sms/auth', {
			to: phoneNumber,
			checkNum: checkNum,
		});
		if (response.data.success) {
			console.log('인증번호 확인 성공');
		} else {
			console.log(response.data);
			console.log('인증번호 확인 실패');
			console.log(response);
		}
		return response;
	} catch (error) {
		console.error('SMS 확인에 실패했습니다:', error);
		throw error;
	}
};

//아이디 중복검사
export const checkIdDuplicate = async (checkId: string) => {
	try {
		const response = await API.post('/user-service/users/check', {
			checkId: checkId,
		});
		return response;
	} catch (error) {
		console.error('아이디 중복 검사 실패:', error);
		throw error;
	}
};
