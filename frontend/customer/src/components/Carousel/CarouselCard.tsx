import styled from 'styled-components';
import Carousel from './Carousel';
import { StoreName } from '../text';
import { useNavigate } from 'react-router';

interface itemsProps {
	item: string;
	name: string;
}

const SliderItem = styled.div`
	width: 100%;
	padding-left: 12px;
	img {
		max-width: 100%;
		height: auto;
	}
`;

const items: itemsProps[] = [
	{
		item: 'http://placehold.it/170x150',
		name: '이미지01',
	},
	{
		item: 'http://placehold.it/170x150/ff0000',
		name: '이미지02',
	},
	{
		item: 'http://placehold.it/170x150/00ffff',
		name: '이미지03',
	},
];

function CarouselCard({ trendword }: CarouselProps) {
	const navigate = useNavigate();

	return (
		<Carousel keyword={trendword}>
			{items.map((item, index) => (
				<SliderItem
					key={index}
					onClick={() => {
						navigate(`${item.name}`);
					}}
				>
					<img src={item.item} alt={item.name} />
					<StoreName>{item.name}</StoreName>
				</SliderItem>
			))}
		</Carousel>
	);
}

export default CarouselCard;
