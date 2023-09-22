import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackarrowIcon from '../../assets/imgs/backarrow.svg';
import SharboxIcon from '../../assets/imgs/sharebox.svg';

const NavigationContainer = styled.div`
	width: 390px;
	height: 40px;
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	justify-content: space-between;
	padding: 25px 10px;
	background-color: rgba(255, 255, 255, 0.7);
	z-index: 10;
`;

const BackButton = styled.button`
	background-color: transparent;
	border: none;
`;

const ShareButton = styled.button`
	background-color: transparent;
	border: none;
`;

const StoreTopButton = () => {
	const navigate = useNavigate();

	const navigateToPreviousPage = () => {
		navigate(-1);
	};

	return (
		<NavigationContainer>
			<BackButton onClick={navigateToPreviousPage}>
				<img src={BackarrowIcon} alt="Go back" />
			</BackButton>
			<ShareButton>
				<img src={SharboxIcon} alt="Share" />
			</ShareButton>
		</NavigationContainer>
	);
};

export default StoreTopButton;
