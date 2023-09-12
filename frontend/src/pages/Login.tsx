import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';

const Login: React.FC = () => {
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

	return (
		<div>
			<div>
				<InputComponent
					value={id}
					placeholder="아이디를 입력하세요"
					type="text"
					onChange={handleIdChange}
					width={350}
					height={64}
					borderRadius="100px"
					border="white"
					margin="10px"
				/>
			</div>
			<div>
				<InputComponent
					value={password}
					placeholder="비밀번호를 입력하세요"
					type="password"
					onChange={handlePasswordChange}
					width={350}
					height={64}
					borderRadius="100px"
					border="white"
					margin="10px"
				/>
			</div>
			<div>
				{/* 로그인 */}
				<ButtonComponent
					label="로그인"
					onClick={handleLogin}
					backgroundColor="rgba(255, 182, 73, 1)"
					fontSize="16px"
					margin="10px"
					textColor="white"
					borderRadius="100px"
					width={344}
					height={64}
				/>
				{/* 회원가입 */}
				<ButtonComponent
					label="회원가입"
					onClick={handleSignup}
					backgroundColor="rgba(255, 182, 73, 1)"
					fontSize="16px"
					margin="10px"
					textColor="white"
					borderRadius="100px"
					width={344}
					height={64}
				/>
			</div>
		</div>
	);
};

export default Login;
