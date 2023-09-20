import React from 'react';
import Card from '../components/Card';
import { Container, FlexBox } from '../components/style/common';

const StoreManagement = () => {
	return (
		<Container>
			<FlexBox dir="row">
				<div>가게 현황</div>
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
				<FlexBox dir="row">
					<Card title="7번 테이블" content="음식 이름" titleSize="24px" width={200} />
					<Card title="8번 테이블" content="음식 이름" titleSize="24px" width={200} />
					<Card title="9번 테이블" content="음식 이름" titleSize="24px" width={200} />
				</FlexBox>
			</FlexBox>
		</Container>
	);
};

export default StoreManagement;
