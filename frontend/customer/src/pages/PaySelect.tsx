import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import BasketTotalResult from '../components/basket/BasketTotalResult';
import Input from '../components/Input';
import Kakao from '../assets/imgs/payment_icon_yellow_medium.png';
import Naver from '../assets/imgs/NaverLogo.png';
import BasketPayBtn from '../components/basket/BasketPayBtn';
const Container = styled.div`
	width: 100%;
`;
const TitleItem = styled.div`
	width: 90%;
	margin: 0 auto;
	padding: 10px 0;
	font-weight: bold;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const MenuBox = styled.div`
	width: 90%;
	background-color: white;
	margin: 0 auto;
`;
const MenuInfoBox = styled.div`
	width: 100%;
	margin: 0 auto;
	margin-bottom: 10px;
	background-color: white;
	border-radius: 0 0 5px 5px;
	padding: 0 10px;
`;
const MenuInfoItem = styled.div`
	padding: 10px;
`;

const RequestBox = styled.div`
	width: 90%;
	margin: 0 auto;
	background-color: white;
`;
const RequestContentItem = styled.div`
	width: 100%;
	padding: 10px;
`;

const MethodBox = styled.div`
	width: 90%;
	background-color: white;
	margin: 5% auto;
`;

const MethodContentBox = styled.div`
	width: 80%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	border-radius: 10px;
	padding: 10px;
	background-color: white;
	justify-content: center;
	&:focus-within {
		border: thin solid black;
	}
`;

const MethodContentItem = styled.div`
	width: 40%;
`;
const MethodContentImg = styled.img`
	width: 50px;
	margin-right: 10px;
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
				<TitleItem>내 결제항목.</TitleItem>
				<MenuInfoBox>
					{myMenuList.map((item, index: number) => (
						<MenuInfoItem key={index}>{item.menuName}</MenuInfoItem>
					))}
				</MenuInfoBox>
			</MenuBox>
			<RequestBox>
				<TitleItem>요청사항</TitleItem>
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
				<TitleItem>결제 수단 선택</TitleItem>
				<MethodContentBox>
					<MethodContentImg src={Kakao}></MethodContentImg>
					<MethodContentItem>카카오페이</MethodContentItem>
				</MethodContentBox>
				<MethodContentBox>
					<MethodContentImg src={Naver}></MethodContentImg>
					<MethodContentItem>네이버페이</MethodContentItem>
				</MethodContentBox>
			</MethodBox>
			<BasketPayBtn label={'결제하기'} url={'/paySelect'}></BasketPayBtn>
		</Container>
	);
}
export default PaySelect;
