import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import chicken from '../../assets/imgs/chicken.png';
import rice from '../../assets/imgs/rice.png';
import sushi from '../../assets/imgs/sushi.png';
import { CarouselTitle } from '../text';

const CarouselWrapper = styled.section<{ background: string | undefined }>`
	display: flex;
	flex-direction: column;
	position: relative;
	background: ${(props) => (!props.background ? '#fff' : props.background)};
	width: 390px;
	margin: 5px 0;
	border-radius: 10px;
	gap: 10px;
`;

interface SliderProps {
	children: React.ReactNode;
	keyword?: string;
	className?: string;
	autoplay?: boolean | number;
	speed?: number;
	loop?: boolean;
	slideToShow?: number;
	background?: string;
	dots?: boolean;
	storeDataLength?: number;
}
const Image = styled.img`
	width: 20px;
	height: 20px;
`;
const Carousel = ({
	children,
	keyword,
	className,
	autoplay = true,
	speed = 300,
	loop = true,
	slideToShow = 2,
	background,
	dots,
	storeDataLength = 1,
}: SliderProps) => {
	const getImage = (props: string) => {
		console.log(props);
		if (props === '치킨') return chicken;
		else if (props === '한식') return rice;
		else return sushi;
	};
	const settings = {
		dots: dots || false,
		infinite: loop,
		speed: speed,
		slidesToShow: storeDataLength < slideToShow ? storeDataLength : slideToShow, // 수정
		autoplay: Boolean(autoplay),
		autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
	};

	return (
		<CarouselWrapper className={className} background={background}>
			<CarouselTitle>
				<div>{keyword && <Image src={getImage(keyword)}></Image>}</div>
				<div>
					<span>{keyword && keyword}</span>
				</div>
			</CarouselTitle>
			<Slider {...settings}>{children}</Slider>
		</CarouselWrapper>
	);
};

export default Carousel;
