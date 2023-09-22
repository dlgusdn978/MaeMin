import React, { useEffect, useState } from 'react';
import { Container } from '../components/layout/common';
import Card from '../components/Card';
import { ReactComponent as LogBook } from '../assets/imgs/logbook.svg';
import { dummyMenuData } from '../assets/dummy';

const menus = dummyMenuData;

const Log = () => {
	const [orderState, setOrderState] = useState('');

	useEffect(() => {
		setOrderState('조리중...');
	}, []);

	return (
		<Container>
			<div>
				현 주문현황
				<Card
					title="주문현황"
					content={orderState}
					height={50}
					icon={(props) => <LogBook {...props} />}
					iconSize={100}
				/>
				{menus &&
					menus.map((item: MenuData) => {
						return <div>{item.name}</div>;
					})}
			</div>

			<div>log</div>
		</Container>
	);
};

export default Log;
