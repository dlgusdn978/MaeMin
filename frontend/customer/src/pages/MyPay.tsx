import Navigation from '../components/Navigation';
import cardImg from '../assets/imgs/cardImg.png';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import {
	MyPayContainer,
	MyPayBox,
	MyPayDateBox,
	MyPayImgBox,
	MyPayImg,
	MyPayInfoBox,
	MyPayInfoItem,
	MyPayInfoTitle,
	MyPayInfoValue,
	MyPayButtonBox,
	MyPayImgItem,
} from '../components/style/payment';
const MyPay = () => {
	const today = new Date().toLocaleDateString().replaceAll('.', '').split(' ');
	today[1] = today[1].padStart(2, '0');
	const todayFormat = today.join('-');
	const price = useSelector((state: RootState) => state.basket.pickedMenuPrice);
	const navigate = useNavigate();
	return (
		<MyPayContainer>
			<Navigation></Navigation>
			<MyPayBox>
				<MyPayDateBox>{todayFormat}</MyPayDateBox>
				<MyPayImgBox>
					<MyPayImgItem>
						<MyPayImg src={cardImg}></MyPayImg>
					</MyPayImgItem>
					<MyPayImgItem>
						<MyPayImg src={cardImg}></MyPayImg>
					</MyPayImgItem>
				</MyPayImgBox>

				<MyPayInfoBox>
					<MyPayInfoItem>
						<MyPayInfoTitle>가게명</MyPayInfoTitle>
						<MyPayInfoValue>a파스타</MyPayInfoValue>
					</MyPayInfoItem>
					<MyPayInfoItem>
						<MyPayInfoTitle>결제 금액</MyPayInfoTitle>
						<MyPayInfoValue>{price}</MyPayInfoValue>
					</MyPayInfoItem>
				</MyPayInfoBox>
				<MyPayButtonBox>
					<Button
						label={'결제'}
						width={'100%'}
						padding={'10px'}
						borderRadius={'5px'}
						border={'none'}
						backgroundColor={'rgb(150, 150, 150)'}
						textColor={'white'}
						onClick={() => navigate('/payPassword')}
					></Button>
				</MyPayButtonBox>
			</MyPayBox>
		</MyPayContainer>
	);
};
export default MyPay;
