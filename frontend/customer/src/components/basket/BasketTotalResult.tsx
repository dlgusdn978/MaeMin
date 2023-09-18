import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import BasketTotalPrice from './BasketTotalPrice';
const BasketTotalContainer = styled.div`
	width: 90%;
	margin: 20% auto 0 auto;
	background-color: white;
	border-radius: 5px;
`;
const BasketTotalTitleBox = styled.div`
	width: 90%;
	margin: 0 auto;
	padding: 10px 0;
	font-weight: bold;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
// const BasketTotalContentBox = styled.div`
// 	width: 100%;
// `;
function BasketTotalResult() {
	const basketTotal = useSelector((state: RootState) => state.basket.totalPrice);
	console.log(basketTotal);
	return (
		<BasketTotalContainer>
			<BasketTotalTitleBox>결제 금액</BasketTotalTitleBox>
			<BasketTotalPrice title={'총 결제 금액'} price={basketTotal}></BasketTotalPrice>
			<BasketTotalPrice title={'내 결제 예정 금액'} price={basketTotal}></BasketTotalPrice>
		</BasketTotalContainer>
	);
}
export default BasketTotalResult;
