import React, { useEffect, useState } from 'react';
import { Container } from '../components/layout/common';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { getMyLog } from '../api/user';
import { MyPageHeader, UserInfoBox, MyOrderHistory, BackgroundImage, OrderText } from '../components/style/mypage';
import ReceiptImage from '../assets/imgs/receipt.jpg';
import styled from 'styled-components';

const Font = styled.div`
	font-size: 25px;
	margin-bottom: 20px;
	margin-top: 20px;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
	font-weight: 700;
`;

const MyPage = () => {
	const [myLog, setMyLog] = useState([]);
	const [isLoading, setIsLoading] = useState(true); // Add loading state
	const userInfo = useSelector((state: RootState) => state.user);

	console.log(userInfo);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true); // Start loading
				getMyLog().then((res) => {
					console.log(res.data);
					setMyLog(res.data);
				});
			} catch (error) {
				console.error('There was an error fetching the data:', error);
			} finally {
				setIsLoading(false); // End loading
			}
		};

		fetchData();
	}, []);

	return (
		<Container>
			<MyPageHeader>My page</MyPageHeader>
			<UserInfoBox>
				<div>닉네임 : {userInfo.nickName}</div>
				<div>이름 : {userInfo.userName}</div>
				<div>페이등록여부 : {userInfo.pay ? 'TFT 회원' : '페이 정보 없음'}</div>
			</UserInfoBox>
			<Font>내 결제 내역 </Font>
			<MyOrderHistory>
				<BackgroundImage src={ReceiptImage} alt="Receipt" />
				{isLoading ? (
					<OrderText>
						<div>매장 이름 : Loading...</div>
						<div>결제 수단 : Loading...</div>
						<div>결제 금액 : Loading...</div>
						<p>주문 일시 : Loading...</p>
					</OrderText>
				) : myLog.length > 0 ? (
					myLog.map((item: MyOrder, i) => (
						<OrderText key={i}>
							<div>매장 이름 : {item.storeName}</div>
							<div>결제 수단 : {item.paymentMethod}</div>
							<div>결제 금액 : {item.totalPrice}</div>
							<p>주문 일시 : {item.createdDate.toString()}</p>
						</OrderText>
					))
				) : (
					<OrderText>
						<div>매장 이름 :</div>
						<div>결제 수단 :</div>
						<div>결제 금액 :</div>
						<p>주문 일시 :</p>
					</OrderText>
				)}
			</MyOrderHistory>
		</Container>
	);
};

export default MyPage;
