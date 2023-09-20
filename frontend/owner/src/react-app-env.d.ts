/// <reference types="react-scripts" />

interface CardProps {
	width?: number;
	height?: number;
	title?: string;
	content?: string;
	titleSize?: string;
	imgSrc?: string;
}

interface IconProps {
	iconSize?: number;
	icon: IconType;
}

type FontSizeProps = {
	fontSize?: string;
};

type HoverProps = {
	width?: number;
	height?: number;
};

type directionType = {
	dir: string;
};

interface Todo {
	id: string;
	todo: string;
	isDone: boolean;
}

interface DragItemList {
	dragItems: DragItem[];
}
