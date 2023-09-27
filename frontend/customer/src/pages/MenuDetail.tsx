import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import styled from 'styled-components';
import FoodCount from '../components/menu/FoodCount';
import Button from '../components/Button';
import FixedHeaderComponent from '../components/menu/FixedHeaderComponent';

const FoodPhoto = styled.div`
	width: 390px;
	height: 304px;
	position: relative;
	margin-top: 20px;
`;

const FoodImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
`;

const FoodName = styled.div`
	font-size: 24px;
	position: relative;
	margin-left: 10px;
	margin-bottom: 10px;
`;

const PriceName = styled.div`
	font-size: 24px;
	position: relative;
	margin-left: 10px;
`;

const FoodPrice = styled.div`
	font-size: 15px;
	position: relative;
	margin-left: 300px;
	margin-top: -15px;
	color: rgba(0, 0, 0, 0.5);
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
`;

const FoodWrapper = styled.div`
	background-color: white;
	margin-bottom: 20px;
	height: 70px;
`;

const MenuDetail = () => {
	const selectedMenu = useSelector((state: RootState) => state.menu);
	const menuList = useSelector((state: RootState) => state.basket.menuList);
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
			<FixedHeaderComponent
				selectedMenuName={selectedMenu.name}
				onBackClick={navigateToPreviousPage}
				itemCount={menuList.length}
			/>
			<FoodPhoto>
				<FoodImage src={selectedMenu.menuPictureUrl} alt={selectedMenu.name} />
			</FoodPhoto>

			<FoodWrapper>
				<FoodName>{selectedMenu.name}</FoodName>

				<PriceName>가격</PriceName>
				<FoodPrice>
					{parseInt(selectedMenu.price.replace(/,/g, '').replace('원', ''), 10).toLocaleString()}원
				</FoodPrice>
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
