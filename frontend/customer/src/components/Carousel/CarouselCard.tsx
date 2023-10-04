import styled from 'styled-components';
import Carousel from './Carousel';
import { StoreName } from '../text';
import { useNavigate } from 'react-router';

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
	storeData: StoreData | null;
}

function CarouselCard({ trendword, storeData }: CarouselProps) {
	const navigate = useNavigate();

	return (
		<Carousel keyword={trendword}>
			{storeData?.pictureUrl?.map((item, index) => (
				<SliderItem
					key={index}
					onClick={() => {
						navigate(`/store-detail/${storeData.storeId}`);
					}}
				>
					<img src={item.storePicureUrl} alt={storeData.name} />
					<StoreName>{storeData.name}</StoreName>
				</SliderItem>
			))}
		</Carousel>
	);
}

export default CarouselCard;
