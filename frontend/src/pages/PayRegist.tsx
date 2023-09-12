import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Select from '../components/Select';
import Input from '../components/Input';
const PayRegistContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: white;
	& div {
		margin-bottom: 10px;
	}
`;
const PayRegistContentBox = styled.div`
	width: 80%;
	margin: 10px auto;
`;
const PayRegistTitleItem = styled.div`
	font-weight: bold;
	font-size: 14px;
`;
const PayRegistInputItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 6%;
	margin: auto;
`;
const PayRegistButtonItem = styled.button`
	width: 100%;
	margin: 30% 0 10% 0;
	padding: 10px;
	border-radius: 5px;
	border: none;
	background-color: rgba(255, 182, 73, 0.9);
	color: white;
	font-weight: bold;
`;
const cardList = ['삼성카드', '현대카드', '롯데카드'];
const monthList = ['1월', '2월', '3월', '4월', '5월', '6월'];
const yearList = ['2023년', '2024년', '2025년', '2026년', '2027년', '2028년'];
const PayRegist = () => {
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
					<Input width={'18%'} />-
					<Input width={'18%'} />-
					<Input width={'18%'} />-
					<Input width={'18%'} />
				</PayRegistInputItem>
			</PayRegistContentBox>
			<PayRegistContentBox>
				<PayRegistTitleItem>비밀번호 입력</PayRegistTitleItem>
				<PayRegistInputItem>
					<Input />
				</PayRegistInputItem>
			</PayRegistContentBox>
			<PayRegistContentBox>
				<PayRegistTitleItem>CVC</PayRegistTitleItem>
				<PayRegistInputItem>
					<Input />
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
