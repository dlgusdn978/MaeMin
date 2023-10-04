import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { CarouselTitle } from '../text';

const CarouselWrapper = styled.section<{ background: string | undefined }>`
	position: relative;
	background: ${(props) => (!props.background ? '#fff' : props.background)};
	width: 390px;
	margin: 15px 0;
	padding-bottom: 10px;
`;

const Carousel = ({
	children,
	keyword,
	className,
	autoplay = true,
	speed = 300,
	loop = true,
	slideToShow,
	background,
	dots,
}: SliderProps) => {
	const settings = {
		dots: !dots ? false : true,
		infinite: loop,
		speed: speed,
		slidesToShow: !slideToShow ? 2 : slideToShow,
		autoplay: Boolean(autoplay),
		autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
		beforeChange: (current: number, next: number) => {
			setIndex(next);
		},
	};
	const [index, setIndex] = useState(0);
	return (
		<CarouselWrapper className={className} background={background}>
			<CarouselTitle>{!keyword ? keyword : `#${keyword}`}</CarouselTitle>
			<Slider {...settings}>{children}</Slider>
			{index}
		</CarouselWrapper>
	);
};

export default Carousel;
