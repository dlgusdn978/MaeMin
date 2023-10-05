import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
import { StoreName } from '../text';
import { useNavigate } from 'react-router';
import StoreImage from './StoreImage'; // Ensure path is correct

const SliderItem = styled.div`
	width: 100%;
	padding-left: 12px;
	img {
		max-width: 100%;
		height: auto;
	}
`;

interface StoreData {
	storeId: number;
	name: string;
	pictureUrl: { storeImageId: number; storePicureUrl: string }[];
}

interface CarouselProps {
	trendword: string;
	storeData: StoreData[] | null;
}

function CarouselCard({ trendword, storeData }: CarouselProps) {
	const navigate = useNavigate();

	console.log('Received storeData:', storeData);

	if (!storeData || storeData.length === 0) {
		return (
			<Carousel keyword={trendword}>
				<SliderItem>
					<StoreImage imageUrl="default_image_url" altDescription="default" />
					<StoreName>No Store Available</StoreName>
				</SliderItem>
			</Carousel>
		);
	}

	return (
		<Carousel keyword={trendword}>
			{storeData.map((store, index) => (
				<SliderItem
					key={index}
					onClick={() => {
						navigate(`/store-detail/${store.storeId}`);
					}}
				>
					<StoreImage
						imageUrl={store.pictureUrl[0]?.storePicureUrl}
						altDescription={store.name || 'Unnamed Store'}
					/>
					<StoreName>{store.name || 'Unnamed Store'}</StoreName>
				</SliderItem>
			))}
		</Carousel>
	);
}

export default CarouselCard;
