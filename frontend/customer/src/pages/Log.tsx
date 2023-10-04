import React, { useEffect, useState } from 'react';
import { Container } from '../components/layout/common';
import Card from '../components/Card';
import { ReactComponent as LogBook } from '../assets/imgs/logbook.svg';
import { dummyOrderData } from '../assets/dummy';
import { getOrderLog } from '../api/user';

const orderData = dummyOrderData;
const menus = orderData[0].menus;

const Log = () => {
	const [orderState, setOrderState] = useState('');

	useEffect(() => {
		setOrderState('조리중...');
		getOrderLog();
	}, []);

	{
		menus &&
			menus.map((item: OrderMenu) => {
				return <div key={item.menuId}>{item.name}</div>;
			});
	}

	return (
		<Container>
			<div>
				<Card
					title="현재 주문현황"
					content={orderState}
					icon={(props) => <LogBook {...props} />}
					iconSize={100}
				/>
				<Card title="과거 주문내역" menus={menus} icon={(props) => <LogBook {...props} />} iconSize={100} />
			</div>
		</Container>
	);
};

export default Log;
