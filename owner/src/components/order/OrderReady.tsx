import Card from '../Card';
import { FlexBox } from '../style/common';

const OrderList = () => {
	return (
		<FlexBox dir="column">
			<Card title="1번 테이블" content="음식 1 : 1개 / 음식 2 : 2개" titleSize="24px" width={600} />
			<Card title="2번 테이블" content="음식 1 : 1개 / 음식 2 : 2개" titleSize="24px" width={600} />
			<Card title="3번 테이블" content="음식 1 : 1개 / 음식 2 : 2개" titleSize="24px" width={600} />
		</FlexBox>
	);
};

export default OrderList;
