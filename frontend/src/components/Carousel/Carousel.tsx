import React, { useState } from 'react';
import { ReactComponent as LeftArrowIcon } from '../assets/imgs/leftArrow.svg';
import { ReactComponent as RightArrowIcon } from '../assets/imgs/rightArrow.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { CarouselTitle } from '../text';

const CarouselWrapper = styled.section`
	position: relative;
	background: #fff;
	width: 390px;
	margin: 15px 0;
	padding-bottom: 10px;
`;

// function NextArrow(props: ArrowProps) {
// 	const { className, style, onClick } = props;
// 	return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />;
// }

const Carousel = ({ children, keyword, className, autoplay = true, speed = 300, loop = true }: SliderProps) => {
	const settings = {
		dots: false,
		infinite: loop,
		speed: speed,
		slidesToShow: 2,
		autoplay: Boolean(autoplay),
		autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
		// NextArrow: <NextArrow />,
	};

	return (
		<CarouselWrapper className={className}>
			<CarouselTitle>#{keyword}</CarouselTitle>
			<Slider {...settings}>{children}</Slider>
		</CarouselWrapper>
	);
};

export default Carousel;
