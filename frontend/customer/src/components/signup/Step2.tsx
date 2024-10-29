import React, { useState } from 'react';
import { sendSms, verifySms } from '../../api/signup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styled from 'styled-components';

const Font = styled.div`
	font-size: 20px;
	margin-bottom: 20px;
	margin-left: 20px;
	margin-top: 20px;
	font-weight: 700;
`;
const Space = styled.div`
	width: 100%;
	height: 80px;
`;
const ValidationError = styled.div`
	color: red;
	font-size: 16px;
	margin: 0 0 10px 20px;
	height: 10px;
`;

const InputButtonContainer = styled.div`
	display: flex;
	align-items: center;
`;

const DisplayTimeContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	font-size: 12px;
	margin-left: 10px;
`;
const DisplayTimeTextR = styled.p`
	color: red;
`;
const DisplayTimeText = styled.p`
	font-size: 10px;
`;
interface Step2Props {
	phone: string;
	setPhone: (value: string) => void;
	verificationCode: string;
	setVerificationCode: (value: string) => void;
	startTimer: (e: React.SyntheticEvent) => void;
	displayTime: () => string;
	prevStep: () => void;
	nextStep: () => void;
	timer: number | null;
	check: (e: React.SyntheticEvent) => void;
}

const Step2 = ({
	phone,
	setPhone,
	verificationCode,
	setVerificationCode,
	startTimer,
	displayTime,
	nextStep,
}: Step2Props): JSX.Element => {
	const [isPhoneValid, setIsPhoneValid] = useState(true);
	const [showValidationForm, setShowValidationForm] = useState(false);
	const [validationMessage, setValidationMessage] = useState('');
	// const [isVerified, setIsVerified] = useState(false);

	const handlePhoneChange = (value: string) => {
		const onlyNums = value.replace(/[^\d]/g, '');
		let formattedPhone;
		if (onlyNums.length <= 3) {
			formattedPhone = onlyNums;
		} else if (onlyNums.length <= 7) {
			formattedPhone = `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
		} else {
			formattedPhone = `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(7, 11)}`;
		}
		if (onlyNums.length > 11) return;
		setPhone(formattedPhone);

		const regex = /^\d{3}-\d{4}-\d{4}$/;
		if (!regex.test(formattedPhone) || onlyNums.length !== 11) {
			setIsPhoneValid(false);
			setValidationMessage('전화번호를 제대로 입력해주세요.');
		} else {
			setIsPhoneValid(true);
			setValidationMessage('');
		}
	};

	const handleNextClick = () => {
		if (!isPhoneValid) {
			alert('전화번호를 제대로 입력해주세요.');
		} else {
			nextStep();
		}
	};

	const handleSendSmsClick = async (e: React.SyntheticEvent) => {
		setShowValidationForm(true);
		startTimer(e);
		try {
			const plainPhone = phone.replace(/-/g, '');
			const response = await sendSms(plainPhone);
			console.log(response.data);

			if (response.data.statusName === 'success') {
				alert('인증번호가 발송되었습니다.');
				startTimer(e); // 인증번호 발송 후 타이머 시작
			} else {
				alert('인증번호 발송에 실패했습니다.');
			}
		} catch (error) {
			alert('인증번호 발송에 실패했습니다.');
			console.error('인증번호 발송 중 에러:', error);
		}
	};

	const handleVerifySmsClick = async () => {
		try {
			const plainPhone = phone.replace(/-/g, '');
			const response = await verifySms(plainPhone, verificationCode);
			if (response.data.message === 'SUCCESS') {
				console.log('인증번호 확인 성공');
				alert('인증번호 확인이 완료되었습니다.');
				// setIsVerified(true); // 인증 성공 시 isVerified 상태를 true로 설정
				nextStep();
			} else {
				alert('인증번호 확인에 실패했습니다.');
				// setIsVerified(false); // 인증 실패 시 isVerified 상태를 false로 설정
			}
		} catch (error) {
			console.error('인증번호 확인 과정에서 에러 발생:', error);
			alert('인증번호 확인에 실패했습니다.');
			// setIsVerified(false); // 예외 발생 시 isVerified 상태를 false로 설정
		}
	};
	return (
		<div>
			<Space></Space>
			<Font>휴대폰 인증을</Font>
			<Font>받아주세요</Font>
			<InputButtonContainer>
				<Input
					value={phone}
					placeholder="휴대폰 번호"
					type="tel"
					onChange={handlePhoneChange}
					width={270}
					height={40}
					borderRadius="3px"
					border={isPhoneValid ? '1px solid rgba(0, 0, 0, 0.5)' : '2px solid red'}
					margin="10px"
					paddingLeft="20px"
				/>
				<Button
					label="인증번호 발송"
					textColor={'white'}
					backgroundColor={isPhoneValid ? 'rgba(255, 182, 73, 1)' : 'rgba(255, 182, 73, 0.5)'}
					borderColor="white"
					borderRadius="3px"
					fontSize="10px"
					width={81}
					height={40}
					onClick={handleSendSmsClick}
				/>
			</InputButtonContainer>
			<ValidationError>{validationMessage}</ValidationError>
			{showValidationForm && (
				<>
					<InputButtonContainer>
						<Input
							value={verificationCode}
							placeholder="인증번호"
							type="text"
							onChange={setVerificationCode}
							width={270}
							height={40}
							borderRadius="3px"
							border="1px solid rgba(0, 0, 0, 0.5)"
							margin="10px"
							paddingLeft="20px"
						/>
						<Button
							label="인증번호 확인"
							textColor={'white'}
							backgroundColor={'rgba(255, 182, 73, 1)'}
							borderColor="white"
							borderRadius="3px"
							fontSize="10px"
							width={81}
							height={40}
							onClick={handleVerifySmsClick}
						/>
					</InputButtonContainer>
					<DisplayTimeContainer>
						<DisplayTimeText>{'남은 시간 '}</DisplayTimeText>
						<DisplayTimeTextR>{displayTime()}</DisplayTimeTextR>
					</DisplayTimeContainer>
					<Button
						label="다음"
						onClick={handleNextClick}
						borderRadius="20px"
						height={54}
						width={350}
						textColor="white"
						margintop="20px"
						backgroundColor="rgba(255, 182, 73, 1)"
						// disabled={!isVerified}
					/>
				</>
			)}
		</div>
	);
};

export default Step2;
