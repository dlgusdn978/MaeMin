import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import styled from 'styled-components';
import FoodCount from '../components/menu/FoodCount';
import Button from '../components/Button';
import FixedHeaderComponent from '../components/menu/FixedHeaderComponent';
import ConfirmModal from '../components/ConfirmModal';
import { basketActions } from '../store/basketSlice';

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
	const [isModalOpen, setIsModalOpen] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const addMenuList = () => {
		const lastIndex = menuList.length !== 0 ? menuList[menuList.length - 1].index + 1 : 0;
		const selectMenu = {
			menuId: selectedMenu.menuId,
			menuName: selectedMenu.name,
			menuPrice: selectedMenu.price,
			menuCount: quantity,
			menuImg: selectedMenu.menuPictureUrl,
			menuPicker: '나',
			menuPayerList: ['나'],
			index: lastIndex,
		};
		dispatch(basketActions.addMenu(selectMenu));
	};

	const addRest = (price: number) => {
		return price.toLocaleString('ko-KR') + '원';
	};

	const handleConfirm = () => {
		addMenuList();
		navigate(-1);
	};

	useEffect(() => {
		if (selectedMenu && selectedMenu.price) {
			setTotalPrice(quantity * selectedMenu.price);
		}
	}, [quantity, selectedMenu]);

	return (
		<div>
			<FixedHeaderComponent
				selectedMenuName={selectedMenu.name}
				onBackClick={() => navigate(-1)}
				itemCount={menuList.length}
			/>
			<FoodPhoto>
				<FoodImage src={selectedMenu.menuPictureUrl} alt={selectedMenu.name} />
			</FoodPhoto>
			<FoodWrapper>
				<FoodName>{selectedMenu.name}</FoodName>
				<PriceName>가격</PriceName>
				<FoodPrice>{addRest(selectedMenu.price)}원</FoodPrice>
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
					onClick={() => setIsModalOpen(true)}
				/>
			</ButtonWrapper>
			{isModalOpen && (
				<ConfirmModal
					message="장바구니에 담겼습니다."
					onConfirm={handleConfirm}
					onCancel={() => setIsModalOpen(false)}
				/>
			)}
		</div>
	);
};

export default MenuDetail;
