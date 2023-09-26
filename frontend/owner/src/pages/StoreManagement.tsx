import React from 'react';
import Card from '../components/Card';
import { Container, FlexBox } from '../components/style/common';
import { logout } from '../api/user';

const StoreManagement = () => {
	return (
		<Container>
			<FlexBox dir="row">
				<div>가게 현황</div>
				{localStorage.getItem('access_token') && <button onClick={logout}>로그아웃</button>}
			</FlexBox>
			<FlexBox dir="column">
				<FlexBox dir="row">
					<Card title="1번 테이블" content="음식 이름" titleSize="24px" width={200} />
					<Card title="2번 테이블" content="음식 이름" titleSize="24px" width={200} />
					<Card title="3번 테이블" content="음식 이름" titleSize="24px" width={200} />
				</FlexBox>
				<FlexBox dir="row">
					<Card title="4번 테이블" content="음식 이름" titleSize="24px" width={200} />
					<Card title="5번 테이블" content="음식 이름" titleSize="24px" width={200} />
					<Card title="6번 테이블" content="음식 이름" titleSize="24px" width={200} />
				</FlexBox>
			</FlexBox>
		</Container>
	);
};

export default StoreManagement;
