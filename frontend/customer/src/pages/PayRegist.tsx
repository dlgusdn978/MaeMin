import { useState } from 'react';
import Navigation from '../components/Navigation';
import Select from '../components/Select';
import Input from '../components/Input';
// import encrypt from '../components/Encrypto';
import {
	PayRegistContainer,
	PayRegistContentBox,
	PayRegistTitleItem,
	PayRegistInputItem,
	PayRegistButtonItem,
} from '../components/style/payment';
const PayRegist = () => {
	// const cardList = ['삼성카드', '현대카드', '롯데카드'];
	const monthList = ['1월', '2월', '3월', '4월', '5월', '6월'];
	const yearList = ['2023년', '2024년', '2025년', '2026년', '2027년', '2028년'];
	const [cardNumFirst, setCardNumFirst] = useState('');
	const [cardNumSecond, setCardNumSecond] = useState('');
	const [cardNumThird, setCardNumThird] = useState('');
	const [cardNumFourth, setCardNumFourth] = useState('');
	const [cardPassword, setCardPassword] = useState('');
	const [cardCVC, setCardCVC] = useState('');
	// const yearRef = useRef<HTMLOptionElement | null>(null);
	// const monthRef = useRef<HTMLOptionElement | null>(null);
	// 검증 로직
	const regist = () => {
		// const userCardNum = encrypt(cardNumFirst + cardNumSecond + cardNumThird + cardNumFourth);
		// const userCardPw = encrypt(cardPassword);
		// const userCvc = encrypt(cardCVC);
	};
	return (
		<PayRegistContainer>
			<Navigation title={'간편결제 등록'}></Navigation>
			{/* <PayRegistContentBox>
				<PayRegistTitleItem>카드사 선택</PayRegistTitleItem>
				<Select list={cardList}></Select>
			</PayRegistContentBox> */}
			<PayRegistContentBox>
				<PayRegistTitleItem>카드 번호 입력</PayRegistTitleItem>
				<PayRegistInputItem>
					<Input
						type={'number'}
						max={'9999'}
						value={cardNumFirst}
						onChange={(value) => {
							if (Number(value) < 10000) setCardNumFirst(value);
						}}
						width="20%"
						borderRadius="5px"
						backgroundColor="rgba(0, 0, 0, 0.05)"
						border="none"
						padding="10px"
					/>
					-
					<Input
						type={'password'}
						max={'9999'}
						value={cardNumSecond}
						onChange={(value) => {
							if (Number(value) < 10000) setCardNumSecond(value);
						}}
						width="20%"
						borderRadius="5px"
						backgroundColor="rgba(0, 0, 0, 0.05)"
						border="none"
						padding="10px"
					/>
					-
					<Input
						type={'password'}
						max={'9999'}
						value={cardNumThird}
						onChange={(value) => {
							if (Number(value) < 10000) setCardNumThird(value);
						}}
						width="20%"
						borderRadius="5px"
						backgroundColor="rgba(0, 0, 0, 0.05)"
						border="none"
						padding="10px"
					/>
					-
					<Input
						type={'number'}
						max={'9999'}
						value={cardNumFourth}
						onChange={(value) => {
							if (Number(value) < 10000) setCardNumFourth(value);
						}}
						width="20%"
						borderRadius="5px"
						backgroundColor="rgba(0, 0, 0, 0.05)"
						border="none"
						padding="10px"
					/>
				</PayRegistInputItem>
			</PayRegistContentBox>
			<PayRegistContentBox>
				<PayRegistTitleItem>비밀번호 입력</PayRegistTitleItem>
				<PayRegistInputItem>
					<Input
						type={'password'}
						value={cardPassword}
						onChange={(value) => {
							if (Number(value) < 100) setCardPassword(value);
							console.log(value);
						}}
						width="20%"
						borderRadius="5px"
						backgroundColor="rgba(0, 0, 0, 0.05)"
						border="none"
						padding="10px"
					/>
					**
				</PayRegistInputItem>
			</PayRegistContentBox>
			<PayRegistContentBox>
				<PayRegistTitleItem>CVC</PayRegistTitleItem>
				<PayRegistInputItem>
					<Input
						type={'password'}
						value={cardCVC}
						onChange={(value) => {
							if (Number(value) < 1000) setCardCVC(value);
						}}
						width="20%"
						borderRadius="5px"
						backgroundColor="rgba(0, 0, 0, 0.05)"
						border="none"
						padding="10px"
					/>
				</PayRegistInputItem>
			</PayRegistContentBox>
			<PayRegistContentBox>
				<PayRegistTitleItem>유효기간</PayRegistTitleItem>
				<PayRegistInputItem>
					<Select list={monthList} width={'35%'}></Select>
					<Select list={yearList} width={'35%'}></Select>
				</PayRegistInputItem>
			</PayRegistContentBox>
			<PayRegistContentBox>
				<PayRegistButtonItem
					onClick={() => {
						regist();
					}}
				>
					페이 등록
				</PayRegistButtonItem>
			</PayRegistContentBox>
		</PayRegistContainer>
	);
};

export default PayRegist;
