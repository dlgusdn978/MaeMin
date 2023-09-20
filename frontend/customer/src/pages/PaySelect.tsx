import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import BasketTotalResult from '../components/basket/BasketTotalResult';
import Input from '../components/Input';
import Kakao from '../assets/imgs/payment_icon_yellow_medium.png';
const Container = styled.div`
	width: 100%;
`;
const MenuBox = styled.div`
	width: 100%;
	margin: 0 auto;
`;
const MenuInfoBox = styled.div`
	width: 90%;
	margin: 0 auto;
	margin-bottom: 10px;
	background-color: white;
	border-radius: 0 0 5px 5px;
`;
const MenuInfoItem = styled.div`
	width: 100%;
`;
const RequestBox = styled.div`
	width: 90%;
	margin: 0 auto;
	background-color: white;
	padding: 0 10px;
	font-weight: bold;
`;
const RequestTitleItem = styled.div`
	width: 100%;
	padding: 10px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const RequestContentItem = styled.div`
	width: 100%;
	padding: 10px;
`;
const MethodBox = styled.div`
	width: 100%;
`;
const ImgBox = styled.div`
	width: 100%;
`;
const ImgItem = styled.img`
	width: 50px;
`;
function PaySelect() {
	const menuList = useSelector((state: RootState) => state.basket.menuList);
	const myMenuList = menuList.filter((item) => item.menuPayerList.some((el) => el === '나') == true);
	const payPrice = useSelector((state: RootState) => state.basket.pickedMenuPrice);
	console.log(payPrice);
	console.log(myMenuList);
	return (
		<Container>
			<Navigation title={'결제'}></Navigation>
			<MenuBox>
				결제 정보, 요청사항, 결제 수단, 결제 금액
				<MenuInfoBox>
					{myMenuList.map((item, index: number) => (
						<MenuInfoItem key={index}>{item.menuName}</MenuInfoItem>
					))}
				</MenuInfoBox>
			</MenuBox>
			<RequestBox>
				<RequestTitleItem>요청사항</RequestTitleItem>
				<RequestContentItem>
					<Input
						width={'100%'}
						padding={'12px 15px'}
						border={'0'}
						fontSize={'8px'}
						backgroundColor={'rgba(0, 0, 0, 0.1)'}
						borderRadius={'5px'}
						onChange={() => {}}
						placeholder={'예) 맵지 않게 해주세요'}
						value={''}
					></Input>
				</RequestContentItem>
			</RequestBox>
			<BasketTotalResult></BasketTotalResult>
			<MethodBox>
				<ImgBox>
					<ImgItem src={Kakao} />
				</ImgBox>
			</MethodBox>
		</Container>
	);
}
export default PaySelect;
