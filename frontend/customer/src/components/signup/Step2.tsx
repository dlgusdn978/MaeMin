import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styled from 'styled-components';

const Font = styled.div`
	font-size: 25px;
	margin-bottom: 20px;
	margin-left: 20px;
`;

const ValidationError = styled.div`
	color: red;
	font-size: 16px;
	margin: 5px 0;
	height: 20px;
`;

const InputButtonContainer = styled.div`
	display: flex;
	align-items: center;
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
	check,
}: Step2Props): JSX.Element => {
	const [isPhoneValid, setIsPhoneValid] = useState(true);
	const [validationMessage, setValidationMessage] = useState('');

	const handlePhoneChange = (value: string) => {
		setPhone(value);
		const regex = /^[0-9]+$/;
		if (!regex.test(value) || value.length !== 11) {
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

	return (
		<div>
			<Font>전화번호,인증번호 입력</Font>
			<InputButtonContainer>
				<Input
					value={phone}
					placeholder="Phone"
					type="tel"
					onChange={handlePhoneChange}
					width={270}
					height={40}
					borderRadius="100px"
					border={isPhoneValid ? '1px solid white' : '2px solid red'}
					margin="10px"
					paddingLeft="30px"
				/>
				<Button label="인증번호 발송" fontSize="10px" width={81} height={26} onClick={startTimer} />
			</InputButtonContainer>
			<ValidationError>{validationMessage}</ValidationError>
			<InputButtonContainer>
				<Input
					value={verificationCode}
					placeholder="인증번호"
					type="text"
					onChange={setVerificationCode}
					width={270}
					height={40}
					borderRadius="100px"
					border="white"
					margin="10px"
					paddingLeft="30px"
				/>
				<Button label="인증번호 확인" fontSize="10px" width={81} height={26} onClick={check} />
			</InputButtonContainer>
			<div>남은 시간: {displayTime()}</div>
			<Button
				label="다음 (2/4)"
				onClick={handleNextClick}
				borderRadius="20px"
				height={54}
				width={350}
				textColor="white"
				margintop="20px"
				backgroundColor="rgba(255, 182, 73, 1)"
			/>
		</div>
	);
};

export default Step2;
