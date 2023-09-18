import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import PayMenuInfo from '../components/basket/BasketMenuInfo';
// import rose from '../../src/assets/imgs/rose.jpg';
// import pollack from '../../src/assets/imgs/pollack.jpg';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import BasketTotalResult from '../components/basket/BasketTotalResult';
import BasketPayBtn from '../components/basket/BasketPayBtn';
import BasketAddBtn from '../components/basket/BasketAddBtn';
// import { basketActions } from '../store/basketSlice';

const PaymentContainer = styled.div`
	width: 100%;
	margin: auto;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;
const PaymentRestInfoBox = styled.div`
	width: 90%;
	padding: 10px;
	margin: 0 auto;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	background-color: white;
	border-radius: 5px 5px 0 0;
`;
const PaymentMenuInfoBox = styled.div`
	width: 90%;
	margin: 0 auto;
	margin-bottom: 10px;
	background-color: white;
	border-radius: 0 0 5px 5px;
`;
const PaymentRestInfoItem = styled.div`
	width: 20%;
`;

function Payment() {
	// const dispatch = useDispatch();
	const menuList = useSelector((state: RootState) => state.basket.menuList);
	return (
		<PaymentContainer>
			<Navigation title={'장바구니 '}></Navigation>
			<PaymentRestInfoBox>
				<PaymentRestInfoItem>가게명</PaymentRestInfoItem>
				<PaymentRestInfoItem></PaymentRestInfoItem>
			</PaymentRestInfoBox>
			<PaymentMenuInfoBox>
				{menuList.map((item, index: number) => (
					<PayMenuInfo
						key={index}
						index={index}
						menuId={item.menuId}
						menuName={item.menuName}
						menuPrice={item.menuPrice}
						menuCount={item.menuCount}
						menuImg={item.menuImg}
						menuPayerList={item.menuPayerList}
					></PayMenuInfo>
				))}
			</PaymentMenuInfoBox>
			<BasketTotalResult></BasketTotalResult>
			<BasketAddBtn></BasketAddBtn>
			<BasketPayBtn></BasketPayBtn>
		</PaymentContainer>
	);
}

export default Payment;
