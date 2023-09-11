/// <reference types="react-scripts" />

interface IconTypeProps {
	width?: number;
	height?: number;
	color?: string;
}

type IconType = (props: IconTypeProps) => JSX.Element;

interface IconProps {
	iconSize?: number;
	icon: IconType;
}

interface CardProps {
	width?: number;
	height?: number;
	title?: string;
	content?: string;
}

type SlideFlag = {
	active?: boolean;
};

interface CarouselProps {
	curSlide: number;
}

interface ArrayProps {
	children: JSX.Element[];
}
