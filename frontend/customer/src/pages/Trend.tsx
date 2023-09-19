import React from 'react';
import CarouselCard from '../components/Carousel/CarouselCard';
import { Container } from '../components/layout/common';
import Search from '../components/Search';
import MapContainer from '../components/map/MapContainer';

const Trend = () => {
	return (
		<Container>
			<Search placeholder="배고프니까 일단 검색!!!" />
			<MapContainer />
			<CarouselCard trendword="약과" />
			<CarouselCard trendword="탕후루" />
			<CarouselCard trendword="파스타" />
		</Container>
	);
};

export default Trend;
