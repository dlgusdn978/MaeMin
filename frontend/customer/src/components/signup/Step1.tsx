import React, { useState } from 'react';
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
const InputDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	& div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
	}
`;
interface Step1Props {
	id: string;
	setId: (value: string) => void;
	password: string;
	setPassword: (value: string) => void;
	confirmPassword: string;
	setConfirmPassword: (value: string) => void;
	isPasswordMatch: boolean;
	checkIdDuplicate: (data: { checkId: string }) => Promise<{ message: string }>;
	nextStep: () => void;
}

const Step1 = ({
	id,
	setId,
	password,
	setPassword,
	confirmPassword,
	setConfirmPassword,
	isPasswordMatch,
	checkIdDuplicate,
	nextStep,
}: Step1Props): JSX.Element => {
	const [isIdDuplicated, setIsIdDuplicated] = useState(false);
	const checkIdDuplicateHandler = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			const response = await checkIdDuplicate({ checkId: id });
			if (response.message === 'SUCCESS') {
				alert('사용 가능한 아이디입니다.');
				setIsIdDuplicated(false);
			} else {
				alert('이미 사용 중인 아이디입니다.');
				setIsIdDuplicated(true);
			}
		} catch (error) {
			alert('오류가 발생했습니다.');
			console.error('ID 중복 검사 에러:', error);
		}
	};
	const handleNextClick = () => {
		// if (isIdDuplicated) {
		// 	alert('아이디 중복 확인을 해주세요.');
		// } else {
		nextStep();
		// }
	};
	return (
		<div>
			<Space></Space>
			<Font>아이디와 비밀번호를</Font>
			<Font>입력해주세요</Font>
			<InputDiv>
				<div>
					<Input
						value={id}
						placeholder="아이디"
						type="text"
						onChange={(value) => {
							setId(value);
						}}
						width={'100%'}
						height={40}
						borderRadius="3px"
						border="1px solid rgba(0, 0, 0, 0.5)"
						paddingLeft="20px"
						readOnly={isIdDuplicated} // 여기에 readOnly 추가
					/>

					<Button label="확인" onClick={checkIdDuplicateHandler} variant={'small'} />
				</div>

				<div>
					<Input
						value={password}
						placeholder="비밀번호"
						type="password"
						onChange={(value) => setPassword(value)}
						border={
							confirmPassword.length === 0 || isPasswordMatch
								? '1px solid rgba(0, 0, 0, 0.5)'
								: '2px solid red'
						}
						width={'100%'}
						height={40}
						borderRadius="3px"
						paddingLeft="20px"
					/>
				</div>
				<div>
					<Input
						value={confirmPassword}
						placeholder="비밀번호 확인"
						type="password"
						onChange={(value) => setConfirmPassword(value)}
						border={
							confirmPassword.length === 0 || isPasswordMatch
								? '1px solid rgba(0, 0, 0, 0.5)'
								: '2px solid red'
						}
						width={'100%'}
						height={40}
						borderRadius="3px"
						paddingLeft="20px"
					/>
				</div>
				<div>
					{confirmPassword.length != 0 && !isPasswordMatch && (
						<div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>
					)}
				</div>
				<div>
					<Button variant={'filled'} label="다음" onClick={handleNextClick}></Button>
				</div>
			</InputDiv>
		</div>
	);
};

export default Step1;
