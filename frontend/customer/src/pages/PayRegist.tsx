import { useState } from 'react';
import Navigation from '../components/Navigation';
import Select from '../components/Select';
import Input from '../components/Input';
import {
	PayRegistContainer,
	PayRegistContentBox,
	PayRegistTitleItem,
	PayRegistInputItem,
	PayRegistButtonItem,
} from '../components/style/payment';
const PayRegist = () => {
	const cardList = ['삼성카드', '현대카드', '롯데카드'];
	const monthList = ['1월', '2월', '3월', '4월', '5월', '6월'];
	const yearList = ['2023년', '2024년', '2025년', '2026년', '2027년', '2028년'];
	const [cardNumFirst, setCardNumFirst] = useState('');
	const [cardNumSecond, setCardNumSecond] = useState('');
	const [cardNumThird, setCardNumThird] = useState('');
	const [cardNumFourth, setCardNumFourth] = useState('');
	const [cardPassword, setCardPassword] = useState('');
	const [cardCVC, setCardCVC] = useState('');
	return (
		<PayRegistContainer>
			<Navigation title={'간편결제 등록'}></Navigation>
			<PayRegistContentBox>
				<PayRegistTitleItem>카드사 선택</PayRegistTitleItem>
				<Select list={cardList}></Select>
			</PayRegistContentBox>
			<PayRegistContentBox>
				<PayRegistTitleItem>카드 번호 입력</PayRegistTitleItem>
				<PayRegistInputItem>
					<Input
						value={cardNumFirst}
						onChange={setCardNumFirst}
						width="18%"
						borderRadius="5px"
						backgroundColor="rgba(0, 0, 0, 0.05)"
						border="none"
						padding="10px"
					/>
					-
					<Input
						value={cardNumSecond}
						onChange={setCardNumSecond}
						width="18%"
						borderRadius="5px"
						backgroundColor="rgba(0, 0, 0, 0.05)"
						border="none"
						padding="10px"
					/>
					-
					<Input
						value={cardNumThird}
						onChange={setCardNumThird}
						width="18%"
						borderRadius="5px"
						backgroundColor="rgba(0, 0, 0, 0.05)"
						border="none"
						padding="10px"
					/>
					-
					<Input
						value={cardNumFourth}
						onChange={setCardNumFourth}
						width="18%"
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
						value={cardPassword}
						onChange={setCardPassword}
						width="100%"
						borderRadius="5px"
						backgroundColor="rgba(0, 0, 0, 0.05)"
						border="none"
						padding="10px"
					/>
				</PayRegistInputItem>
			</PayRegistContentBox>
			<PayRegistContentBox>
				<PayRegistTitleItem>CVC</PayRegistTitleItem>
				<PayRegistInputItem>
					<Input
						value={cardCVC}
						onChange={setCardCVC}
						width="100%"
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
					<Select list={monthList} width={'50%'}></Select>
					<Select list={yearList} width={'50%'}></Select>
				</PayRegistInputItem>
			</PayRegistContentBox>
			<PayRegistContentBox>
				<PayRegistButtonItem>페이 등록</PayRegistButtonItem>
			</PayRegistContentBox>
		</PayRegistContainer>
	);
};

export default PayRegist;
