import React, { useState, useEffect, PropsWithChildren } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import type { AppDispatch } from '../../store/store';
import { basketActions } from '../../store/basketSlice';

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
	display: flex;
	justify-content: center;
`;
const PayMenuTitleItem = styled.div`
	width: 80%;
`;
const PayMenuTitleBtn = styled.div`
	width: 20%;
	display: flex;
	justify-content: flex-end;
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
	flex-direction: column;
	justify-content: space-between;
	& > div:first-child {
		margin-bottom: 20px;
	}
`;
const PayMenuName = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 80%;
	font-size: 14px;
`;
const PayMenuCount = styled.div`
	display: flex;
	justify-content: flex-end;
	font-size: 12px;
	align-items: center;
`;
const PayMenuCountBtn = styled.button`
	border: none;
	display: flex;
	justify-content: flex-end;
	font-size: 8px;
	font-color: blue;
	background-color: blue;
	align-items: center;
	background-color: white;
	border: 1px solid rgba(0, 0, 0, 0.1);
	padding: 6px;
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
	const deleteMenu = () => {};
	useEffect(() => {
		setTotalPrice(count * menuPrice);
	}, [count]);
	useEffect(() => {
		dispatch(basketActions.addTotalPrice(totalPrice));
	}, []);
	return (
		<PayMenuContainer>
			<PayMenuTitleBox>
				<PayMenuTitleItem>
					{menuName}({menuId})
				</PayMenuTitleItem>
				<PayMenuTitleBtn onClick={() => deleteMenu()}>✖</PayMenuTitleBtn>
			</PayMenuTitleBox>
			<PayMenuInfoBox>
				<PayMenuImgItem>
					<PayMenuImg src={menuImg} alt="이미지 없음"></PayMenuImg>
				</PayMenuImgItem>
				<PayMenuInfoItem>
					<PayMenuOption>
						<PayMenuName>옵션(기본) : {addRest(menuPrice)}</PayMenuName>
						<PayMenuCount>
							<PayMenuCountBtn onClick={() => subtractCount()}>-</PayMenuCountBtn>
							<PayMenuCountBtn>{count}</PayMenuCountBtn>
							<PayMenuCountBtn onClick={() => addCount()}>+</PayMenuCountBtn>
						</PayMenuCount>
					</PayMenuOption>
					<PayMenuPrice>{addRest(totalPrice)}</PayMenuPrice>
				</PayMenuInfoItem>
			</PayMenuInfoBox>
		</PayMenuContainer>
	);
};

export default PayMenuInfo;
