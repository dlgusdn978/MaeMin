import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import MenuPhoto from '../components/MenuPhoto';
import styled from 'styled-components';
import FoodCount from '../components/FoodCount';
import Button from '../components/Button';

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
	/* margin-top: 20px;
	margin-bottom: 20px; */
`;

const MenuDetail = () => {
	const { menuId } = useParams<{ menuId: string }>();
	const selectedMenu = useSelector((state: RootState) => state.menu);
	const [quantity, setQuantity] = useState(1);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		console.log({ quantity, selectedMenu });
		if (selectedMenu && selectedMenu.price) {
			const priceAsNumber = parseInt(selectedMenu.price.replace(/,/g, '').replace('원', ''), 10);
			setTotalPrice(quantity * priceAsNumber);
		}
	}, [quantity, selectedMenu]);

	return (
		<div>
			<h1>해당 메뉴 상세페이지 메뉴id:{menuId}</h1>
			<MenuPhoto />
			{/* 감싸기 */}
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
