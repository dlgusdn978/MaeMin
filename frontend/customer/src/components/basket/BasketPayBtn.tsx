import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
const BasketPayBtnContainer = styled.div`
	width: 90%;
	margin: 0 auto 20px auto;
`;
function BasketPayBtn() {
	const basketTotal = useSelector((state: RootState) => state.basket.totalPrice);
	console.log(basketTotal);
	return (
		<BasketPayBtnContainer>
			<Button
				label={'주문 결제하기'}
				width={'100%'}
				margin={'0px auto;'}
				backgroundColor={'#FFB649'}
				padding={'10px'}
				borderRadius={'5px'}
				textColor={'white'}
				fontWeight={'bold'}
				fontSize={'18px'}
			></Button>
		</BasketPayBtnContainer>
	);
}
export default BasketPayBtn;
