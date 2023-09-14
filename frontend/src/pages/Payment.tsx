import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import PayMenuInfo from '../components/PayMenuInfo';
import rose from '../../src/assets/imgs/rose.jpg';
import pollack from '../../src/assets/imgs/pollack.jpg';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
const PaymentContainer = styled.div`
	width: 90%;
	margin: auto;
	background-color: white;
`;
const PaymentRestInfoBox = styled.div`
	width: 90%;
	padding: 10px;
	margin: 10px auto;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const PaymentMenuInfoBox = styled.div`
	width: 100%;
`;
const PaymentRestInfoItem = styled.div`
	width: 20%;
`;

function Payment() {
	const foodList = [
		{
			menuId: '1',
			menuName: '로제 파스타',
			menuPrice: 8900,
			menuCount: 1,
			menuImg: rose,
		},
		{
			menuId: '2',
			menuName: '명란 파스타',
			menuPrice: 7900,
			menuCount: 2,
			menuImg: pollack,
		},
	];
	const basketTotal = useSelector((state: RootState) => state.basket.totalPrice);
	console.log(basketTotal);
	return (
		<PaymentContainer>
			<Navigation title={'결제 화면'}></Navigation>
			<PaymentRestInfoBox>
				<PaymentRestInfoItem>가게명</PaymentRestInfoItem>
				<PaymentRestInfoItem>트렌디</PaymentRestInfoItem>
			</PaymentRestInfoBox>
			<PaymentMenuInfoBox>
				{foodList.map((item, index: number) => (
					<PayMenuInfo
						key={index}
						menuId={item.menuId}
						menuName={item.menuName}
						menuPrice={item.menuPrice}
						menuCount={item.menuCount}
						menuImg={item.menuImg}
					></PayMenuInfo>
				))}
				{basketTotal}원
			</PaymentMenuInfoBox>
		</PaymentContainer>
	);
}

export default Payment;
