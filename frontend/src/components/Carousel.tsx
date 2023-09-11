import React, { useState } from 'react';
import { ReactComponent as LeftArrowIcon } from '../assets/imgs/leftArrow.svg';
import { ReactComponent as RightArrowIcon } from '../assets/imgs/rightArrow.svg';
import styled, { css } from 'styled-components';

const CurSlide = styled.div<SlideFlag>`
	opacity: ${(active) => (active ? 1 : 0)};
	transition: all 0.5s ease;
	width: 100%;
`;

const Slides = styled.div<CarouselProps>`
	display: flex;
	${(props) =>
		props.curSlide &&
		css`
			transform: translateX(-${props.curSlide * 100}%);
		`}
`;

const Carousel = ({ children }: ArrayProps) => {
	const [cur, setCur] = useState(0);

	const slides = ['Delhi', 'Mumbai', 'Pune'];
	const len = slides.length;

	const activeSlide = children.map((slide, index) => (
		<CurSlide active={cur === index} key={index}>
			{slide}
		</CurSlide>
	));

	return (
		<div>
			<div>
				<Slides curSlide={cur}>{activeSlide}</Slides>
			</div>
			<button
				onClick={() => {
					setCur((cur - 1 + activeSlide.length) % activeSlide.length);
				}}
			>
				Left
			</button>
			<button
				onClick={() => {
					setCur((cur + 1) % activeSlide.length);
				}}
			>
				Right
			</button>
		</div>
	);
};

export default Carousel;
