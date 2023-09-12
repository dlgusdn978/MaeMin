import React from 'react';
import CarouselCard from '../components/Carousel/CarouselCard';
import { TallContainer } from '../components/layout/common';

const Trend = () => {
	return (
		<TallContainer>
			<h2>Trend Page</h2>
			<CarouselCard trendword="약과" />
			<CarouselCard trendword="탕후루" />
			<CarouselCard trendword="싸피" />
		</TallContainer>
	);
};

export default Trend;
