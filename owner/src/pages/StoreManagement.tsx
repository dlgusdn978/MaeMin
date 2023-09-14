import React from 'react';
import Card from '../components/Card';
import { Container, FlexBox } from '../components/style/common';

const StoreManagement = () => {
	return (
		<Container>
			<FlexBox dir="row">
				<div>가게 관리</div>
			</FlexBox>
			<FlexBox dir="column">
				<FlexBox dir="row">
					<Card title="1번 테이블" content="음식 이름" titleSize="24px" width={200} />
					<Card title="1번 테이블" content="음식 이름" titleSize="24px" width={200} />
					<Card title="1번 테이블" content="음식 이름" titleSize="24px" width={200} />
				</FlexBox>
				<FlexBox dir="row">
					<Card title="1번 테이블" content="음식 이름" titleSize="24px" width={200} />
					<Card title="1번 테이블" content="음식 이름" titleSize="24px" width={200} />
					<Card title="1번 테이블" content="음식 이름" titleSize="24px" width={200} />
				</FlexBox>
				<FlexBox dir="row">
					<Card title="1번 테이블" content="음식 이름" titleSize="24px" width={200} />
					<Card title="1번 테이블" content="음식 이름" titleSize="24px" width={200} />
					<Card title="1번 테이블" content="음식 이름" titleSize="24px" width={200} />
				</FlexBox>
			</FlexBox>
		</Container>
	);
};

export default StoreManagement;
