import React, { useState } from 'react';
import InputComponent from './InputComponent';
import ButtonComponent from './ButtonComponent';

const Login: React.FC = () => {
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
		console.log('Signup clicked');
	};

	// const checkUser = () => {
	// 	for (let i = 0; i < user)
	// 	if(id === '' || password === '') {
	// 		alert('아이디와 비밀번호를 입력해주세요')
	// 		return
	// 	}
	// }

	return (
		<div>
			<div>
				<label htmlFor="id">ID:</label>
				<InputComponent value={id} placeholder="Enter your ID" onChange={handleIdChange} />
			</div>
			<div>
				<label htmlFor="password">Password:</label>
				<InputComponent value={password} placeholder="Enter your Password" onChange={handlePasswordChange} />
			</div>
			<div>
				<ButtonComponent label="Login" onClick={handleLogin} />
				<ButtonComponent label="Signup" onClick={handleSignup} />
			</div>
		</div>
	);
};

export default Login;
