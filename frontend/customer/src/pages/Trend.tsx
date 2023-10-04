import React, { useEffect, useState } from 'react';
import CarouselCard from '../components/Carousel/CarouselCard';
import { Container } from '../components/layout/common';
import Search from '../components/Search';
import MapContainer from '../components/map/MapContainer';
import { getStoreDetail } from '../api/store';

const Trend = () => {
	const [storeData, setStoreData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const storeId = 1;
			const response = await getStoreDetail(storeId);
			setStoreData(response);
		};

		fetchData();
	}, []);

	return (
		<Container>
			<Search placeholder="배고프니까 일단 검색!!!" />
			<MapContainer />
			<CarouselCard trendword="카테고리0 치킨" storeData={storeData} />
			<CarouselCard trendword="카테고리1 양식" storeData={storeData} />
			<CarouselCard trendword="카테고리2 야식" storeData={storeData} />
			<CarouselCard trendword="카테고리3 중식" storeData={storeData} />
			<CarouselCard trendword="카테고리4 한식" storeData={storeData} />
			<CarouselCard trendword="카테고리5 일식" storeData={storeData} />
			<CarouselCard trendword="카테고리6 디저트" storeData={storeData} />
		</Container>
	);
};

export default Trend;
