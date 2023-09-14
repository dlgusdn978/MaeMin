import React from 'react';
import CarouselCard from '../components/Carousel/CarouselCard';
import { Container } from '../components/layout/common';
import Search from '../components/Search';

const Trend = () => {
	return (
		<Container>
			{/* <TallContainer> */}
			<Search />
			<CarouselCard trendword="약과" />
			<CarouselCard trendword="탕후루" />
			<CarouselCard trendword="싸피" />
			{/* </TallContainer> */}
		</Container>
	);
};

export default Trend;
