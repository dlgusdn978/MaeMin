import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styled from 'styled-components';

interface MenuInfoProps {
	menuPrice: number;
	index: number;
}

const BasketDetailContainer = styled.div`
	padding: 5px 0;
	width: 100%;
`;
const BasketDetailInfoBox = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 3px 10px;
	width: 100%;
`;
const BasketDetailButtonItem = styled.div``;
const BasketDetailPriceItem = styled.div`
	font-weight: bold;
`;
const BasketDetailPayerBox = styled.div<{ toggleInfo: boolean }>`
	border-radius: 5px;
	background-color: rgba(0, 0, 0, 0.1);
	display: ${(props) => (props.toggleInfo ? 'block' : 'none')};
`;
const BasketDetailPayerItem = styled.div`
	width: 90%;
	margin: 0 auto;
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
	&:first-child {
		font-weight: bold;
		padding: 10px 0;
		font-size: 14px;
	}
	&:nth-child(n + 2) {
		padding: 10px 30px;
		font-size: 12px;
	}
`;
const BasketDetailPayerNameItem = styled.div``;
const BasketDetailPayerListItem = styled.div`
	width: 90%;
	padding: 5px;
	margin: 0 auto;
	display: flex;
`;
const BasketDetailPayerListTag = styled.div`
	width: 20%;
`;
const BasketDetailPayerList = styled.div`
	width: 80%;
	display: flex;
	justify-content: flex-end;
`;
const BasketDetailResultItem = styled.div`
	width: 90%;
	margin: 0 auto;
	display: flex;
	font-size: 12px;
	padding: 10px;
	justify-content: space-between;
`;
const BasketDetailPayerResult = styled.div`
	&:first-child {
		font-weight: bold;
	}
`;

function BasketMenuDetailPrice({ menuPrice, index }: MenuInfoProps) {
	const [toggleInfo, setToggleInfo] = useState(false);
	const buttonRef = useRef<HTMLDivElement>(null);
	const menuPicker = useSelector((state: RootState) => state.basket.menuList[index].menuPicker);
	const payerList = useSelector((state: RootState) => state.basket.menuList[index].menuPayerList);
	// 가격 세자리마다 쉼표 추가 ex) 1,000원
	const addRest = (price: number) => {
		return price.toLocaleString('ko-KR') + '원';
	};
	const toggleDetailInfo = () => {
		setToggleInfo(!toggleInfo);
	};
	return (
		<BasketDetailContainer>
			<BasketDetailInfoBox>
				<BasketDetailButtonItem ref={buttonRef} onClick={() => toggleDetailInfo()}>
					{toggleInfo ? '▲' : '▼'}
				</BasketDetailButtonItem>
				<BasketDetailPriceItem>{addRest(menuPrice)}</BasketDetailPriceItem>
			</BasketDetailInfoBox>
			<BasketDetailPayerBox toggleInfo={toggleInfo}>
				<BasketDetailPayerItem>분할 결제</BasketDetailPayerItem>
				<BasketDetailPayerItem>
					<BasketDetailPayerNameItem>메뉴를 선택한 사람</BasketDetailPayerNameItem>
					<BasketDetailPayerListItem>
						<BasketDetailPayerListTag>ㄴ</BasketDetailPayerListTag>
						<BasketDetailPayerList>{menuPicker}</BasketDetailPayerList>
					</BasketDetailPayerListItem>
					<BasketDetailPayerNameItem>참여인원</BasketDetailPayerNameItem>
					<BasketDetailPayerListItem>
						<BasketDetailPayerListTag>ㄴ</BasketDetailPayerListTag>
						<BasketDetailPayerList>{payerList.map((item) => item)}</BasketDetailPayerList>
					</BasketDetailPayerListItem>
				</BasketDetailPayerItem>
				<BasketDetailResultItem>
					<BasketDetailPayerResult>예상 결제금액</BasketDetailPayerResult>
					<BasketDetailPayerResult>
						{payerList.length > 1 ? addRest(menuPrice / payerList.length) : addRest(menuPrice)}
					</BasketDetailPayerResult>{' '}
				</BasketDetailResultItem>
			</BasketDetailPayerBox>
		</BasketDetailContainer>
	);
}
export default BasketMenuDetailPrice;
