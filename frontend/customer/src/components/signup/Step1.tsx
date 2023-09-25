import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styled from 'styled-components';

const Font = styled.div`
	font-size: 25px;
	margin-bottom: 20px;
	margin-left: 20px;
`;

interface Step1Props {
	id: string;
	setId: (value: string) => void;
	password: string;
	setPassword: (value: string) => void;
	confirmPassword: string;
	setConfirmPassword: (value: string) => void;
	isPasswordMismatch: boolean;
	checkIdDuplicate: () => void;
	nextStep: () => void;
}

const Step1 = ({
	id,
	setId,
	password,
	setPassword,
	confirmPassword,
	setConfirmPassword,
	isPasswordMismatch,
	checkIdDuplicate,
	nextStep,
}: Step1Props): JSX.Element => {
	return (
		<div>
			<Font>아이디,비밀번호입력</Font>
			<Input
				value={id}
				placeholder="ID"
				type="text"
				onChange={setId}
				width={270}
				height={40}
				borderRadius="100px"
				border="white"
				margin="10px"
				paddingLeft="30px"
			/>
			<Button label="중복검사" fontSize="10px" width={57} height={26} onClick={checkIdDuplicate} />
			<Input
				value={password}
				placeholder="PW"
				type="password"
				onChange={setPassword}
				border={isPasswordMismatch ? '2px solid red' : '1px solid white'}
				width={270}
				height={40}
				borderRadius="100px"
				margin="10px"
				paddingLeft="30px"
			/>
			<Input
				value={confirmPassword}
				placeholder="PW 확인"
				type="password"
				onChange={setConfirmPassword}
				border={isPasswordMismatch ? '2px solid red' : '1px solid white'}
				width={270}
				height={40}
				borderRadius="100px"
				margin="10px"
				paddingLeft="30px"
			/>
			{isPasswordMismatch && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
			<Button
				label="다음 (1/4)"
				onClick={nextStep}
				borderRadius="20px"
				height={54}
				width={350}
				margintop="20px"
				textColor="white"
				backgroundColor="rgba(255, 182, 73, 1)"
			/>
		</div>
	);
};

export default Step1;
