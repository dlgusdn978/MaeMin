import React from 'react';
import Card from '../components/Card';
import { Container, FlexBox } from '../components/style/common';

const StoreMenu = () => {
	return (
		<Container>
			<FlexBox dir="row">
				<div>메뉴 리스트</div>
			</FlexBox>
			<FlexBox dir="column">
				<FlexBox dir="row">
					<Card title="1번 테이블" content="라구파스타 13000원" titleSize="24px" width={200} />
					<Card title="1번 테이블" content="라구파스타 13000원" titleSize="24px" width={200} />
					<Card title="1번 테이블" content="라구파스타 13000원" titleSize="24px" width={200} />
				</FlexBox>
			</FlexBox>
		</Container>
	);
};

export default StoreMenu;
