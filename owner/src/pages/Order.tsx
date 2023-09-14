import React from 'react';
import Card from '../components/Card';
import { Container, FlexBox } from '../components/style/common';

const Order = () => {
	return (
		<Container>
			<FlexBox dir="row">
				<div>가게 관리</div>
				<FlexBox dir="column">
					<Card title="현 주문 현황" content="음식 1 : 1개 / 음식 2 : 2개" titleSize="24px" width={600} />
				</FlexBox>
			</FlexBox>
		</Container>
	);
};

export default Order;
