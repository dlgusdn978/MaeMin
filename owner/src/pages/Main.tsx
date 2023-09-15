import React, { useState } from 'react';
import { BoldText, Container } from '../components/style/common';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Order from './Order';

const Main = () => {
	const [logined, setLogined] = useState(false);
	const navigate = useNavigate();
	const goLogin = () => {
		navigate('/login');
	};

	const goSignup = () => {
		navigate('/signup');
	};

	const toggleLogin = () => {
		setLogined(!logined);
	};
	return (
		<Container>
			<BoldText>Trend Food Fighter</BoldText>
			<Button label={`${logined ? 'logout' : 'login'}`} onClick={toggleLogin} />
			{logined ? (
				<Order />
			) : (
				<div>
					<Button
						label="로그인"
						onClick={goLogin}
						backgroundColor="#ffc46a"
						fontSize="16px"
						margin="10px"
						textColor="black"
						width={344}
						height={64}
						borderColor="rgb(240, 240, 240)"
					/>
					<Button
						label="회원가입"
						onClick={goSignup}
						backgroundColor="#ffc46a"
						fontSize="16px"
						margin="10px"
						textColor="black"
						width={344}
						height={64}
						borderColor="rgb(240, 240, 240)"
					/>
				</div>
			)}
		</Container>
	);
};

export default Main;
