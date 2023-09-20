import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import styled from 'styled-components';
import { basketActions } from '../../store/basketSlice';
interface MenuInfoProps {
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
const BasketDetailButtonItem = styled.div`
	transform: rotate(0);
	transition: all 0.5s;
	&.rotate {
		transform: rotate(-180deg);
	}
`;
const BasketDetailPriceItem = styled.div`
	font-weight: bold;
`;
const BasketDetailPayerBox = styled.div<{ toggleInfo: boolean }>`
	border-radius: 5px;
	background-color: rgba(0, 0, 0, 0.1);
	height: 0;
	transform: scaleY(0);
	visibility: ${(props) => (props.toggleInfo ? 'visible' : 'hidden')};
	transition: all 0.2s;
	&.act {
		height: 90%;
		transform: scaleY(1);
	}
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
	padding: 10px 5px;
	margin: 0 auto;
	display: flex;
`;
const BasketDetailPayerListTag = styled.div`
	width: 20%;
`;
const BasketDetailPayerList = styled.div`
	width: 80%;
	display: flex;
	justify-content: flex-start;
	word-break: keep-all;
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

function BasketMenuDetailPrice({ index }: MenuInfoProps) {
	const dispatch: AppDispatch = useDispatch();
	const [toggleInfo, setToggleInfo] = useState(false);
	const buttonRef = useRef<HTMLDivElement>(null);
	const menuList = useSelector((state: RootState) => state.basket.menuList);

	const menuIndex = menuList.findIndex((item) => {
		if (item.index == index) return true;
		else return false;
	});
	const menu = menuList[menuIndex];
	const menuPrice = menu.menuCount * menu.menuPrice;
	const menuPicker = menu.menuPicker;
	const payerList = menu.menuPayerList;
	// 가격 세자리마다 쉼표 추가 ex) 1,000원
	const addRest = (price: number) => {
		return price.toLocaleString('ko-KR') + '원';
	};
	// 결제 정보 열기
	const toggleDetailInfo = () => {
		setToggleInfo(!toggleInfo);
	};
	// 예상 결제 금액
	const predictPrice = () => {
		if (payerList.length > 0)
			return payerList.indexOf('나') !== -1
				? addRest(Math.floor(menuPrice / payerList.length / 10) * 10)
				: addRest(0);
		else return addRest(0);
	};
	useEffect(() => {
		dispatch(basketActions.setPickedPrice());
	}, [predictPrice]);
	return (
		<BasketDetailContainer>
			<BasketDetailInfoBox>
				<BasketDetailButtonItem
					className={toggleInfo ? 'rotate' : ''}
					ref={buttonRef}
					onClick={() => toggleDetailInfo()}
				>
					{'▼'}
				</BasketDetailButtonItem>
				<BasketDetailPriceItem>{addRest(menuPrice)}</BasketDetailPriceItem>
			</BasketDetailInfoBox>
			<BasketDetailPayerBox className={toggleInfo ? 'act' : ''} toggleInfo={toggleInfo}>
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
						<BasketDetailPayerList>{payerList.map((item) => item + ' ')}</BasketDetailPayerList>
					</BasketDetailPayerListItem>
				</BasketDetailPayerItem>
				<BasketDetailResultItem>
					<BasketDetailPayerResult>예상 결제금액</BasketDetailPayerResult>
					<BasketDetailPayerResult>{predictPrice()}</BasketDetailPayerResult>{' '}
				</BasketDetailResultItem>
			</BasketDetailPayerBox>
		</BasketDetailContainer>
	);
}
export default BasketMenuDetailPrice;
