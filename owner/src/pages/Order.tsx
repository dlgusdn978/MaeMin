import React from 'react';
import Card from '../components/Card';
import { Container, FlexBox } from '../components/style/common';

const Order = () => {
	return (
		<Container>
			<FlexBox dir="row">
				<div>현 주문 현황</div>
				<FlexBox dir="column">
					<Card title="1번 테이블" content="음식 1 : 1개 / 음식 2 : 2개" titleSize="24px" width={600} />
					<Card title="2번 테이블" content="음식 1 : 1개 / 음식 2 : 2개" titleSize="24px" width={600} />
					<Card title="3번 테이블" content="음식 1 : 1개 / 음식 2 : 2개" titleSize="24px" width={600} />
				</FlexBox>
			</FlexBox>
		</Container>
	);
};

export default Order;
