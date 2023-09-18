import React, { useState, useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import styled from 'styled-components';

const PayPasswordContainer = styled.div`
	width: 90%;
	min-height: calc(1000vh - 80px);
	background-color: white;
`;
const PayPasswordInputBox = styled.div`
	display: flex;
	justify-content: center;
	font-size: 32px;
	margin-top: 40%;
`;
const PayPasswordInputItem = styled.div`
	opacity: 0.2;
	&.active {
		opacity: 1;
	}
`;
const PayPasswordButtonBox = styled.div`
	margin-top: 50%;
	display: grid;
	grid-template-rows: repeat(4, 25%);
	grid-template-columns: repeat(3, 33%);
	align-items: center;
	justify-items: center;
`;
const PayPasswordButtonItem = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 15% 0;
	cursor: pointer;
`;

function PayPassword() {
	const [num, setNum] = useState('');
	const [upperBtns, setUpperBtns] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
	const activeRef = useRef<HTMLDivElement[] | null[]>([]);
	// 무작위 키패드
	const shuffle = (array: string[]) => {
		return array.sort(() => Math.random() - 0.5);
	};
	// 비밀번호 입력, 지우기, 초기화
	const setPassword = (item: string) => {
		if (item === '초기화') setNum('');
		else if (item === '지우기' && num.length >= 0) setNum(num.slice(0, num.length - 1));
		else setNum(num + item);
	};
	// 비밀번호 칸 생성 및 조건부 css 적용
	const passwordRender = () => {
		const result = [];
		for (let i = 1; i <= 6; i++) {
			result.push(
				<PayPasswordInputItem
					ref={(ref) => (activeRef.current[i] = ref)}
					key={i}
					className={num.length >= i ? 'active' : ''}
				>
					⚫
				</PayPasswordInputItem>,
			);
		}
		return result;
	};
	// 무작위 키패드 생성 1회
	useEffect(() => {
		const newArr: string[] = shuffle(upperBtns);
		setUpperBtns([...newArr.slice(0, 9), '초기화', ...newArr.slice(9), '지우기']);
	}, []);

	return (
		<PayPasswordContainer>
			<Navigation title={'간편결제 비밀번호 등록'}></Navigation>
			<PayPasswordInputBox>{passwordRender()}</PayPasswordInputBox>

			<PayPasswordButtonBox>
				{upperBtns.map((item, index) => (
					<PayPasswordButtonItem
						key={index}
						onClick={() => {
							setPassword(item);
						}}
					>
						{item}
					</PayPasswordButtonItem>
				))}
			</PayPasswordButtonBox>
		</PayPasswordContainer>
	);
}
export default React.memo(PayPassword);
