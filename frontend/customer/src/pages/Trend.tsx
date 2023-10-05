import React, { useEffect, useState } from 'react';
import { Container } from '../components/layout/common';
import Search from '../components/Search';
import MapContainer from '../components/map/MapContainer';
import CarouselCard from '../components/Carousel/CarouselCard';
import { getAllStores } from '../api/store';

interface Store {
	storeId: number;
	name: string;
	category: string;
	pictureUrl: { storeImageId: number; storePicureUrl: string }[];
}

const Trend = () => {
	const [storeData, setStoreData] = useState<Record<string, Store[]>>({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const allStoresData: Store[] = await getAllStores();
				console.log('API Response:', allStoresData);

				const fetchedData: Record<string, Store[]> = {};
				const categories = ['한식', '치킨', '일식', '양식', '분식', '카페', '기타'];

				categories.forEach((category) => {
					fetchedData[category] = allStoresData.filter((store) => store.category === category);
					console.log(`Filtered data for ${category}:`, fetchedData[category]);
				});

				setStoreData(fetchedData);
			} catch (error) {
				console.error('Error fetching store data:', error);
			}
		};

		fetchData();
	}, []);
	return (
		<Container>
			<Search placeholder="배고프니까 일단 검색!!!" />
			<MapContainer />
			{['한식', '치킨', '일식', '양식', '분식', '카페', '기타'].map((category) => (
				<CarouselCard key={category} trendword={category} storeData={storeData[category]} />
			))}
		</Container>
	);
};

export default Trend;
