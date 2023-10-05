import React, { useEffect, useState } from 'react';
import { Container } from '../components/layout/common';
import Card from '../components/Card';
import { ReactComponent as LogBook } from '../assets/imgs/logbook.svg';
import { dummyOrderData } from '../assets/dummy';
// import { Stomp } from '@stomp/stompjs';
// import SockJS from 'sockjs-client';
import axios from 'axios';
import Input from '../components/Input';
import Button from '../components/Button';

const orderData = dummyOrderData;
const menus = orderData[0].menus;

const Log = () => {
	const [keyword, setKeyword] = useState<string>('');
	// console.log(myLocation);

	const changeValue = (e: string) => {
		setKeyword(e);
		console.log(keyword);
	};
	const search = () => {
		console.log(keyword);

		for (let i = 1; i <= 3; i++) {
			let str = '';
			let storeList = '';
			axios
				.get(
					`https://dapi.kakao.com/v2/local/search/keyword?query=${keyword}&category_group_code=FD6&page=${i}`,
					{
						headers: {
							Authorization: 'KakaoAK 3f332958ca50f86368db003e5f9f532d',
							'Content-Type': 'application/json;charset=UTF-8',
						},
					},
				)
				.then((response) => {
					const getData = response.data.documents;
					getData.map((item: storeProps2) => {
						const category = item.category_name.split(' > ')[1];
						str +=
							'insert into store(address, closed_days, content, category, created_date, latitude, longitude, `name`, operation_hours,';
						str += 'owner_id, phone, status, area_area_code)';
						str += `values('${item.address_name}', '연중무휴','안녕하세요 ${item.place_name} 입니다.', '${category}', CURRENT_TIMESTAMP(), '${item.y}', '${item.x}',`;
						str += `'${item.place_name}', '09:30 ~ 21:30', ${item.id}, '${item.phone}', 'open' ,29200);\n`;
						storeList += `${item.place_name}\n`;
					});
					console.log(str);
					console.log(storeList);
				});
		}
	};

	// const socket = new SockJS('/cart');
	// const stompClient = Stomp.over(socket);
	// console.log(stompClient);
	// stompClient.connect({}, () => {
	// 	stompClient.subscribe(`/topic/${1}`, (message) => {
	// 		const cartUpdate = JSON.parse(message.body);
	// 		console.log(cartUpdate);
	// 	});
	// });
	// useEffect(() => {
	// 	stompClient.send(`/app/cart/${1}`, { name: 'asdf', message: 'hi' });
	// }, []);
	// topic일 때는 subscribe
	// app일 때는 publish
	// const client = new Client({
	// 	brokerURL: 'wss://j9c208.p.ssafy.io/cart-service/cart',
	// 	onConnect: () => {
	// 		try {
	// 			client.subscribe('/topic/cart/1', (message) => console.log(`Received:${message.body}`));
	// 			client.publish({ destination: '/app/cart/1', body: 'asdfasdf' });
	// 			console.log('연결 완료');
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	},
	// });
	// useEffect(() => {
	// 	client.activate();
	// 	// const subscribe = () => {
	// 	// 	client.current.subscribe('/sub/topic/');
	// 	// };
	// }, []);
	const [orderState, setOrderState] = useState('');

	useEffect(() => {
		setOrderState('조리중...');
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
			<Input onChange={(e) => changeValue(e)}></Input>
			<Button label="검색" onClick={() => search()}></Button>
		</Container>
	);
};

export default Log;
