import React, { useState, useEffect, PropsWithChildren } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import type { AppDispatch } from '../store/store';
import { basketActions } from '../store/basketSlice';
interface MenuInfoProps {
	menuId: string;
	menuName: string;
	menuPrice: number;
	menuImg: string;
	menuCount: number;
}
const PayMenuContainer = styled.div`
	width: 90%;
	margin: auto;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const PayMenuTitleBox = styled.div`
	width: 100%;
	font-size: 16px;
	font-weight: bold;
	padding: 10px 0px;
`;
const PayMenuInfoBox = styled.div`
	width: 100%;
	display: flex;
`;
const PayMenuImgItem = styled.div`
	width: 30%;
	padding: 15px;
`;
const PayMenuImg = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 5px;
	object-fit: contains;
`;
const PayMenuInfoItem = styled.div`
	width: 70%;
	padding: 10px;
`;
const PayMenuOption = styled.div`
	display: flex;
`;
const PayMenuName = styled.div`
	width: 80%;
`;
const PayMenuCount = styled.div`
	width: 20%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const PayMenuCountBtn = styled.button`
	width: 50%;
	border: none;
	background-color: white;
`;
const PayMenuPrice = styled.div`
	display: flex;
	padding-top: 10px;
	justify-content: flex-end;
	font-weight: bold;
`;
const PayMenuInfo = ({ menuId, menuName, menuPrice, menuImg, menuCount }: PropsWithChildren<MenuInfoProps>) => {
	const [count, setCount] = useState<number>(menuCount);
	const [totalPrice, setTotalPrice] = useState<number>(menuPrice * menuCount);
	const dispatch: AppDispatch = useDispatch();
	// 수량 추가
	const addCount = () => {
		setCount(count + 1);
		dispatch(basketActions.addTotalPrice(menuPrice));
	};
	// 수량 제거
	const subtractCount = () => {
		if (count == 1) {
			alert('메뉴 삭제?');
			return;
		}
		setCount(count - 1);
		dispatch(basketActions.addTotalPrice(-menuPrice));
	};
	// 가격 세자리마다 쉼표 추가 ex) 1,000원
	const addRest = (price: number) => {
		return price.toLocaleString('ko-KR') + '원';
	};
	useEffect(() => {
		setTotalPrice(count * menuPrice);
	}, [count]);
	useEffect(() => {
		dispatch(basketActions.addTotalPrice(totalPrice));
	}, []);
	return (
		<PayMenuContainer>
			<PayMenuTitleBox>
				{menuName}({menuId})
			</PayMenuTitleBox>
			<PayMenuInfoBox>
				<PayMenuImgItem>
					<PayMenuImg src={menuImg} alt="이미지 없음"></PayMenuImg>
				</PayMenuImgItem>
				<PayMenuInfoItem>
					<PayMenuOption>
						<PayMenuName>옵션(기본) : {menuPrice}</PayMenuName>
						<PayMenuCount>
							<PayMenuCountBtn onClick={() => addCount()}>↑</PayMenuCountBtn>
							{count}
							<PayMenuCountBtn onClick={() => subtractCount()}>↓</PayMenuCountBtn>
						</PayMenuCount>
					</PayMenuOption>
					<PayMenuPrice>{addRest(totalPrice)}</PayMenuPrice>
				</PayMenuInfoItem>
			</PayMenuInfoBox>
		</PayMenuContainer>
	);
};

export default PayMenuInfo;
