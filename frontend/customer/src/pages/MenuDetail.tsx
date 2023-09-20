import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import styled from 'styled-components';
import FoodCount from '../components/menu/FoodCount';
import Button from '../components/Button';
import CartIcon from '../assets/imgs/shoppingcart.svg';
import BackarrowIcon from '../assets/imgs/backarrow.svg';

const FoodPhoto = styled.div`
	width: 390px;
	height: 304px;
	position: relative; // 위치를 상대적으로 지정
`;

const FoodImage = styled.img`
	width: 100%; // 부모 컨테이너인 FoodPhoto의 너비에 맞춤
	height: 100%; // 부모 컨테이너인 FoodPhoto의 높이에 맞춤
	object-fit: cover; // 이미지 비율을 유지하면서 꽉 차게 표시
	position: absolute; // 부모 컨테이너인 FoodPhoto에 대해 절대 위치 지정
	top: 0;
	left: 0;
`;

const FoodName = styled.div`
	font-size: 24px;
	position: relative;
	margin-left: 10px;
`;

const FoodPrice = styled.div`
	font-size: 15px;
	position: relative;
	margin-left: 36px;
	color: rgba(0, 0, 0, 0.5);
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const FoodWrapper = styled.div`
	background-color: white;
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

const MenuDetail = () => {
	const { menuId } = useParams<{ menuId: string }>();
	const selectedMenu = useSelector((state: RootState) => state.menu);
	const [quantity, setQuantity] = useState(1);
	const [totalPrice, setTotalPrice] = useState(0);
	const navigate = useNavigate();
	const navigateToPreviousPage = () => {
		navigate(-1);
	};

	useEffect(() => {
		console.log({ quantity, selectedMenu });
		if (selectedMenu && selectedMenu.price) {
			const priceAsNumber = parseInt(selectedMenu.price.replace(/,/g, '').replace('원', ''), 10);
			setTotalPrice(quantity * priceAsNumber);
		}
	}, [quantity, selectedMenu]);

	return (
		<div>
			<BackButton onClick={navigateToPreviousPage}>
				<img src={BackarrowIcon} alt="Go back" />
			</BackButton>

			<h1>해당 메뉴 상세페이지 메뉴id:{menuId}</h1>

			<FoodPhoto>
				<FoodImage src={selectedMenu.menuPictureUrl} alt={selectedMenu.name} />
			</FoodPhoto>

			<CartButton>
				<img src={CartIcon} alt="Share" />
			</CartButton>

			<FoodWrapper>
				<FoodName>{selectedMenu.name}</FoodName>
				<FoodPrice>{selectedMenu.price}</FoodPrice>
			</FoodWrapper>

			<FoodCount quantity={quantity} setQuantity={setQuantity} />

			<ButtonWrapper>
				<Button
					label={`${totalPrice}원 담기`}
					backgroundColor="rgba(255, 182, 73, 1)"
					fontSize="16px"
					margin="10px"
					textColor="white"
					borderRadius="100px"
					width={344}
					height={64}
					borderColor="rgb(240, 240, 240)"
				/>
			</ButtonWrapper>
		</div>
	);
};

export default MenuDetail;
