import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import styled from 'styled-components';
import { login } from '../api/user';
import jwt from '../common/jwt';

const ButtonWrapper = styled.div``;

const InputWrapper = styled.div`
	margin-bottom: 40px;
`;
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	height: 90vh;
`;

const Login = () => {
	const navigate = useNavigate();

	const [id, setId] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleIdChange = (value: string) => {
		setId(value);
	};

	const handlePasswordChange = (value: string) => {
		setPassword(value);
	};

	const handleLogin = async () => {
		try {
			const response = await login({
				loginId: id,
				loginPw: password,
			});
			const { token, expiredTime } = response.data;

			jwt.saveToken(token); // 토큰 저장
			jwt.saveExpiredTime(expiredTime); // 만료시간 저장
			navigate('/'); // 메인 페이지로 이동
		} catch (e) {
			console.log(e);
		}
	};

	const handleSignup = () => {
		navigate('/signup');
	};

	return (
		<Container>
			<InputWrapper>
				<div>
					<Input
						value={id}
						placeholder="ID"
						type="text"
						onChange={handleIdChange}
						width={300}
						height={64}
						borderRadius="20px"
						border="white"
						margin="10px"
						paddingLeft="30px"
					/>
				</div>
				<div>
					<Input
						value={password}
						placeholder="PW"
						type="password"
						onChange={handlePasswordChange}
						width={300}
						height={64}
						borderRadius="20px"
						border="white"
						margin="10px"
						paddingLeft="30px"
					/>
				</div>
			</InputWrapper>
			<div>
				{/* 로그인 */}
				<ButtonWrapper>
					<Button
						label="로그인"
						onClick={handleLogin}
						backgroundColor="rgba(255, 182, 73, 1)"
						fontSize="16px"
						margin="10px"
						textColor="white"
						borderRadius="100px"
						width={380}
						height={64}
						borderColor="rgb(240, 240, 240)"
					/>
					{/* 회원가입 */}
					<Button
						label="회원가입"
						onClick={handleSignup}
						backgroundColor="rgba(255, 182, 73, 1)"
						fontSize="16px"
						margin="10px"
						textColor="white"
						borderRadius="100px"
						width={380}
						height={64}
						borderColor="rgb(240, 240, 240)"
					/>
				</ButtonWrapper>
			</div>
		</Container>
	);
};

export default Login;
