import React from 'react';
import styled from 'styled-components';
interface PriceProps {
	title: string;
	price: number;
}
const BasketPriceContainer = styled.div`
	width: 80%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	padding-bottom: 10px;
	font-size: 14px;
`;
const BasketPriceBox = styled.div`
    width::50%;
	margin-top:5px;
`;
function BasketPriceInfo({ title, price }: PriceProps) {
	// 가격 세자리마다 쉼표 추가 ex) 1,000원
	const addRest = (price: number) => {
		return price.toLocaleString('ko-KR') + '원';
	};
	return (
		<BasketPriceContainer>
			<BasketPriceBox>{title}</BasketPriceBox>
			<BasketPriceBox>{addRest(price)}</BasketPriceBox>
		</BasketPriceContainer>
	);
}
export default BasketPriceInfo;
