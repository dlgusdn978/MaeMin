import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface Step1Props {
	id: string;
	setId: (value: string) => void;
	password: string;
	setPassword: (value: string) => void;
	confirmPassword: string;
	setConfirmPassword: (value: string) => void;
	isPasswordMismatch: boolean;
	checkIdDuplicate: (e: React.SyntheticEvent) => void;
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
			<h1>아이디,비밀번호입력</h1>
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
			<Button label="다음" onClick={nextStep} />
		</div>
	);
};

export default Step1;
