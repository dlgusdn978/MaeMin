import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { Container } from '../components/layout/common';
import { ReactComponent as SearchIcon } from '../assets/imgs/search.svg';
import { ReactComponent as RedArrowIcon } from '../assets/imgs/redarrow.svg';
import { ReactComponent as ReservationIcon } from '../assets/imgs/reservation.svg';
import { ReactComponent as CartIcon } from '../assets/imgs/cart.svg';
import { ReactComponent as QrIcon } from '../assets/imgs/qrImg.svg';
import PayRegist from '../pages/PayRegist';
type directionType = {
	dir: string;
};

const HomeBox = styled.div<directionType>`
	display: flex;
	flex-direction: ${(props) => (props.dir === 'row' ? 'row' : 'column')};
`;
const testArr = ['1', '2', '3', '4'];
const Home = () => {
	return (
		<Container>
			<div>
				검색창
				<SearchIcon />
			</div>
			<HomeBox dir="column">
				<Card
					title="트렌드"
					content="현재 핫 토픽 키워드는?"
					icon={(props) => <RedArrowIcon {...props} />}
					iconSize={90}
				/>
				<Card
					content="원하는 매장에 예약해보세요"
					title="예약하기"
					icon={(props) => <ReservationIcon {...props} />}
					iconSize={60}
				/>
			</HomeBox>
			<HomeBox dir="row">
				<Card
					title="내 주문 현황"
					content="현재 함께 주문하고 있는 장바구니 보러가기"
					width={160}
					icon={(props) => <CartIcon {...props} />}
					iconSize={40}
				/>
				<Card
					title="QR 촬영"
					content="현재 매장의 qr을 촬영해서 주문공유를 시작해보세요!"
					width={160}
					icon={(props) => <QrIcon {...props} />}
					iconSize={40}
				/>
			</HomeBox>
		</Container>
	);
};

export default Home;
