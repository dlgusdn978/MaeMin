import React from 'react';
import Card from '../components/Card';
import { Container, FlexBox } from '../components/common';

const Home = () => {
	return (
		<Container>
			<FlexBox dir="row">
				<div>주문 접수</div>
				<div>매장 관리</div>
				<div>매장 분석</div>
			</FlexBox>
			<FlexBox dir="row">
				<div>가게 관리</div>
				<FlexBox dir="column">
					<Card title="트렌드" content="현재 핫 토픽 키워드는?" titleSize="24px" />
				</FlexBox>
			</FlexBox>
		</Container>
	);
};

export default Home;
