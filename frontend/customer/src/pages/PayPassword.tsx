import React, { useState, useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import {
	PayPasswordContainer,
	PayPasswordInputBox,
	PayPasswordInputItem,
	PayPasswordButtonBox,
	PayPasswordButtonItem,
} from '../components/style/payment';
function PayPassword() {
	const [num, setNum] = useState('');
	const [upperBtns, setUpperBtns] = useState<string[]>([]);
	const activeRef = useRef<HTMLDivElement[] | null[]>([]);
	// 무작위 키패드
	const shuffle = () => {
		const arr: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
		const reset = '초기화';
		const clear = '지우기';
		const sortArr = arr.sort(() => Math.random() - 0.5);
		const newArr = [...sortArr.slice(0, 9), reset, ...sortArr.slice(9), clear];
		setUpperBtns(newArr);
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
	const pwCheck = () => {
		// api 연결 후 수정.
		if (num === '123456')
			setTimeout(() => {
				alert('ㅈ');
			}, 1000);
		else setNum('');
	};
	// 무작위 키패드 생성 1회
	useEffect(() => {
		shuffle();
	}, []);
	// 입력 감지
	useEffect(() => {
		if (num.length == 6) pwCheck();
	}, [num]);
	return (
		<PayPasswordContainer>
			<Navigation title={'간편결제 비밀번호 입력'}></Navigation>
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
