import React, { useEffect, useState } from 'react';
import { Container } from '../components/layout/common';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { getMyLog } from '../api/user';
import { MyOrderHistory, MyPageHeader, UserInfoBox } from '../components/style/mypage';
import { CardContainer } from '../components/Card';

const MyPage = () => {
	const [myLog, setMyLog] = useState([]);
	const userInfo = useSelector((state: RootState) => state.user);

	console.log(userInfo);

	useEffect(() => {
		const fetchData = async () => {
			try {
				await getMyLog().then((res) => {
					console.log(res.data);
					setMyLog(res.data);
				});
			} catch (error) {
				console.error('There was an error fetching the data:', error);
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
			<MyOrderHistory>
				내 결제 내역
				{myLog?.map((item: MyOrder, i) => {
					return (
						<CardContainer key={i}>
							<div>매장 이름 : {item.storeName}</div>
							<div>결제 수단 : {item.paymentMethod}</div>
							<div>결제 금액 : {item.totalPrice}</div>
							<p>주문 일시 : {item.createdDate.toString()}</p>
						</CardContainer>
					);
				})}
			</MyOrderHistory>
		</Container>
	);
};

export default MyPage;
