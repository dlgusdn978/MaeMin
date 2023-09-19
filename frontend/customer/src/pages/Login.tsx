import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import styled from 'styled-components';

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

	const handleLogin = () => {
		// 로그인 로직
		console.log('Logged in with ID:', id, 'Password:', password);
	};

	const handleSignup = () => {
		// 회원가입 로직
		navigate('/signup');
	};

	const ButtonWrapper = styled.div`
		position: absolute;
		left: 21px;
		top: 704px;
	`;

	return (
		<div style={{ paddingLeft: '15px' }}>
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
			<div>
				{/* 로그인 */}
				<ButtonWrapper></ButtonWrapper>
				<Button
					label="로그인"
					onClick={handleLogin}
					backgroundColor="rgba(255, 182, 73, 1)"
					fontSize="16px"
					margin="10px"
					textColor="white"
					borderRadius="100px"
					width={344}
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
					width={344}
					height={64}
					borderColor="rgb(240, 240, 240)"
				/>
			</div>
		</div>
	);
};

export default Login;
