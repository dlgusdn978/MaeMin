import React from 'react';
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
	// console.log(myLocation);
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
		</Container>
	);
};

export default Home;
