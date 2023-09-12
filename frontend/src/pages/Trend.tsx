import React from 'react';
import CarouselCard from '../components/Carousel/CarouselCard';

const Trend = () => {
	return (
		<div>
			<h2>Trend Page</h2>
			<CarouselCard trendword="약과" />
			<CarouselCard trendword="탕후루" />
			<CarouselCard trendword="싸피" />
		</div>
	);
};

export default Trend;
