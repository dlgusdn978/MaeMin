import { useState, useRef } from 'react';
import Navigation from '../components/Navigation';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import BasketTotalResult from '../components/basket/BasketTotalResult';
import Input from '../components/Input';
import Kakao from '../assets/imgs/payment_icon_yellow_medium.png';
import Naver from '../assets/imgs/NaverLogo.png';
import Foorending from '../assets/imgs/Foorending.png';
import BasketPayBtn from '../components/basket/BasketPayBtn';
import {
	PaymentContainer,
	PaymentTitleItem,
	PaymentMenuBox,
	PaymentMenuInfoBox,
	PaymentMenuInfoItem,
	PaymentMenuInfo,
	PaymentRequestBox,
	PaymentRequestContentItem,
	PaymentMethodBox,
	PaymentMethodContentBox,
	PaymentMethodContentItem,
	PaymentMethodContentImg,
} from '../components/style/payment';

interface payMethod {
	src: string;
	name: string;
}
const PaySelect = () => {
	const menuList = useSelector((state: RootState) => state.basket.menuList);
	const myMenuList = menuList.filter((item) => item.menuPayerList.some((el) => el === '나') == true);
	const [selectedMethod, setSelectedMethod] = useState(-1);
	const userRequest = useRef<HTMLInputElement>(null);
	const addRest = (price: number) => {
		return price.toLocaleString('ko-KR') + '원';
	};
	const payMethodList = [
		{
			src: Kakao,
			name: '카카오페이',
		},
		{
			src: Naver,
			name: '네이버페이',
		},
		{
			src: Foorending,
			name: '푸렌딩페이',
		},
	];
	const clickArea = (index: number) => {
		setSelectedMethod(index);
	};

	return (
		<PaymentContainer>
			<Navigation title={'결제'}></Navigation>
			<PaymentMenuBox>
				<PaymentTitleItem>내 결제항목</PaymentTitleItem>
				<PaymentMenuInfoBox>
					{myMenuList.map((item, index: number) => (
						<PaymentMenuInfoItem key={index}>
							<PaymentMenuInfo>{item.menuName}</PaymentMenuInfo>
							<PaymentMenuInfo>
								{addRest(
									Math.floor((item.menuPrice * item.menuCount) / item.menuPayerList.length / 10) * 10,
								)}
							</PaymentMenuInfo>
						</PaymentMenuInfoItem>
					))}
				</PaymentMenuInfoBox>
			</PaymentMenuBox>
			<PaymentRequestBox>
				<PaymentTitleItem>요청사항</PaymentTitleItem>
				<PaymentRequestContentItem>
					<Input
						width={'100%'}
						padding={'12px 15px'}
						border={'0'}
						fontSize={'8px'}
						backgroundColor={'rgba(0, 0, 0, 0.1)'}
						borderRadius={'5px'}
						onChange={() => {}}
						placeholder={'예) 맵지 않게 해주세요'}
						inputRef={userRequest}
					></Input>
				</PaymentRequestContentItem>
			</PaymentRequestBox>
			<BasketTotalResult></BasketTotalResult>
			<PaymentMethodBox>
				<PaymentTitleItem>결제 수단 선택</PaymentTitleItem>
				{payMethodList.map((item: payMethod, index: number) => (
					<PaymentMethodContentBox
						onClick={() => {
							clickArea(index);
						}}
						selected={index == selectedMethod}
					>
						<PaymentMethodContentImg src={item.src}></PaymentMethodContentImg>
						<PaymentMethodContentItem>{item.name}</PaymentMethodContentItem>
					</PaymentMethodContentBox>
				))}
			</PaymentMethodBox>
			<BasketPayBtn label={'결제하기'} url={selectedMethod !== -1 ? '/myPay' : '/payment'}></BasketPayBtn>
		</PaymentContainer>
	);
};
export default PaySelect;
