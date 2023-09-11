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
				<label htmlFor="id">ID:</label>
				<InputComponent value={id} placeholder="아이디" onChange={handleIdChange} />
			</div>
			<div>
				<label htmlFor="password">Password:</label>
				<InputComponent value={password} placeholder="비밀번호" onChange={handlePasswordChange} />
			</div>
			<div>
				<ButtonComponent label="Login" onClick={handleLogin} />
				<ButtonComponent label="Signup" onClick={handleSignup} />
			</div>
		</div>
	);
};

export default Login;
