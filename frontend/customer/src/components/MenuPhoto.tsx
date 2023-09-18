import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import CartIcon from '../assets/imgs/shoppingcart.svg';
import BackarrowIcon from '../assets/imgs/backarrow.svg';
import rose from '../assets/imgs/rose.jpg';

const MenuPhotoContainer = styled.div`
	position: relative;
	width: 390px;
	height: 304px;
	background-color: white;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
const TextOverlay = styled.div`
	position: absolute;
	top: 10%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2; // 다른 요소 위에 올라오도록
	color: black;
	font-size: 24px;
	z-index: 2;
`;

const CartButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	background-color: transparent;
	border: none;
	margin-top: 20px;
	margin-right: 10px;
	z-index: 3;
`;

const BackButton = styled.button`
	position: absolute;
	top: 0;
	left: 0;
	background-color: transparent;
	border: none;
	margin-top: 25px;
	margin-left: 10px;
	z-index: 3;
`;

const MenuImage = styled.img`
	width: 390px;
	height: 304px;
	object-fit: cover;
	z-index: 1; // z-index 설정
`;

const MenuPhoto = () => {
	const { menuId } = useParams<{ menuId: string }>();
	const navigate = useNavigate();

	const navigateToPreviousPage = () => {
		navigate(-1);
	};

	return (
		<MenuPhotoContainer>
			<BackButton onClick={navigateToPreviousPage}>
				<img src={BackarrowIcon} alt="Go back" />
			</BackButton>

			<TextOverlay>메뉴아이디:{menuId}</TextOverlay>

			<MenuImage src={rose} alt="" />
			{/* 이미지 url들어갈곳 */}

			<CartButton>
				<img src={CartIcon} alt="Share" />
			</CartButton>
		</MenuPhotoContainer>
	);
};

export default MenuPhoto;
