import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface Step3Props {
	nickname: string;
	setNickname: (value: string) => void;
	checkNicknameDuplicate: () => void;
	prevStep: () => void;
	nextStep: () => void;
}

const Step3 = ({ nickname, setNickname, checkNicknameDuplicate, prevStep, nextStep }: Step3Props): JSX.Element => {
	return (
		<div>
			<h1>닉네임 입력</h1>
			<Input
				value={nickname}
				placeholder="닉네임"
				type="text"
				onChange={setNickname}
				width={270}
				height={40}
				borderRadius="100px"
				border="white"
				margin="10px"
				paddingLeft="30px"
			/>
			<Button label="중복검사" fontSize="10px" width={57} height={26} onClick={checkNicknameDuplicate} />
			<Button label="이전" onClick={prevStep} />
			<Button label="다음" onClick={nextStep} />
		</div>
	);
};

export default Step3;
