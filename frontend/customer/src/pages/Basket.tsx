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

	margin: 0 auto;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;
const PaymentBox = styled.div`
	position: relative;
	width: 100%;
`;
const PaymentRestInfoBox = styled.div<{ basketCheck: boolean }>`
	width: 90%;
	padding: ${(props) => (props.basketCheck ? '70px 30px' : '10px')};
	font-weight: ${(props) => (props.basketCheck ? 'bold' : '')};
	display: ${(props) => (props.basketCheck ? 'flex' : '')};
	justify-content: ${(props) => (props.basketCheck ? 'center' : '')};
	margin: 0 auto;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	background-color: white;
	border-radius: ${(props) => (props.basketCheck ? '5px' : '5px 5px 0 0;')};
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
	const basketCheck = menuList.length === 0;
	return (
		<PaymentContainer>
			<Navigation title={'장바구니 '}></Navigation>
			<PaymentBox>
				{basketCheck ? (
					<PaymentRestInfoBox basketCheck={basketCheck}>
						{'장바구니에 추가된 메뉴가 없어요'}
					</PaymentRestInfoBox>
				) : (
					<PaymentRestInfoBox basketCheck={basketCheck}>
						<PaymentRestInfoItem>가게명</PaymentRestInfoItem>
						<PaymentRestInfoItem></PaymentRestInfoItem>
					</PaymentRestInfoBox>
				)}

				<PaymentMenuInfoBox>
					{menuList.map((item, index: number) => (
						<PayMenuInfo
							key={index}
							index={item.index}
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
			</PaymentBox>
		</PaymentContainer>
	);
}

export default Payment;
