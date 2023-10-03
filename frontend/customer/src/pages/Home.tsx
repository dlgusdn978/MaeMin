import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { Container } from '../components/layout/common';
import { ReactComponent as RedArrowIcon } from '../assets/imgs/redarrow.svg';
import { ReactComponent as ReservationIcon } from '../assets/imgs/reservation.svg';
import { ReactComponent as CartIcon } from '../assets/imgs/cart.svg';
import { ReactComponent as QrIcon } from '../assets/imgs/qrImg.svg';
import Search from '../components/Search';
import { useDispatch, useSelector } from 'react-redux';
import useGeolocation from '../hooks/useGeolocation';
import { locationActions } from '../store/locationSlice';
import { RootState } from '../store/store';
import { getPublicKey } from '../api/crypto';
import Input from '../components/Input';
import Button from '../components/Button';
import axios from 'axios';
import { secureActions } from '../store/secureSlice';
type directionType = {
	dir: string;
};

const HomeBox = styled.div<directionType>`
	display: flex;
	flex-direction: ${(props) => (props.dir === 'row' ? 'row' : 'column')};
`;

const Home = () => {
	const dispatch = useDispatch();
	const location = useGeolocation();
	const menuCount = useSelector((state: RootState) => state.basket.menuList.length);
	// console.log(location.coordinates);
	const locationInfo = location.coordinates;
	const myLocation = {
		lat: locationInfo?.lat,
		lng: locationInfo?.lng,
	};
	const [keyword, setKeyword] = useState<string>('');
	// console.log(myLocation);
	// useEffect ,[] 난수 생성
	// back으로부터 response로 public key 받음.
	// 암호화는 public key만
	const changeValue = (e: string) => {
		setKeyword(e);
		console.log(keyword);
	};

	useEffect(() => {
		getPublicKey().then((response) => {
			const index = response.data.key;
			const publicKey = response.data.value;
			const validTime = response.data.validTime;
			const secureState: secureState = { index, publicKey, validTime };
			dispatch(secureActions.setKey(secureState));
		});
	}, []);
	console.log(useSelector((state: RootState) => state.secure.index));
	interface storeProps {
		address_name: string;
		category_group_code: string;
		category_group_name: string;
		category_name: string;
		distance: string;
		id: number;
		phone: string;
		place_name: string;
		place_url: string;
		road_address_name: string;
		x: string;
		y: string;
	}
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
					getData.map((item: storeProps) => {
						str += 'insert into store(address, category, latitude, longitude, name, owner_id, phone)';
						str += `values('${item.address_name}', 1, '${item.y}', '${item.x}', '${item.place_name}', ${item.id}, '${item.phone}');\n`;
						storeList += `${item.place_name}\n`;
					});
					console.log(str);
					console.log(storeList);
				});
		}
	};
	dispatch(locationActions.setLocation(myLocation));
	return (
		<Container>
			<Search placeholder="배고프니까 일단 검색!!!" />
			<HomeBox dir="column">
				<Card
					title="트렌드"
					content="현재 핫 토픽 키워드는?"
					height={160}
					icon={(props) => <RedArrowIcon {...props} />}
					iconSize={90}
					titleSize="24px"
					url={'trend'}
				/>
				<Card
					title="예약하기"
					content="원하는 매장에 예약해보세요"
					height={160}
					icon={(props) => <ReservationIcon {...props} />}
					iconSize={60}
					titleSize="24px"
				/>
			</HomeBox>
			<HomeBox dir="row">
				<Card
					title="내 주문 현황"
					content="현재 함께 주문확인"
					width={160}
					height={160}
					icon={(props) => <CartIcon {...props} />}
					iconSize={40}
					url={'basket'}
					count={menuCount}
				/>
				<Card
					title="QR 촬영"
					content="QR로 주문을 시작해보세요!"
					width={160}
					height={160}
					icon={(props) => <QrIcon {...props} />}
					iconSize={40}
					url={'qr'}
				/>
			</HomeBox>
			<Input onChange={(e) => changeValue(e)}></Input>
			<Button label="검색" onClick={() => search()}></Button>
		</Container>
	);
};

export default Home;
