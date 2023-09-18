/// <reference types="react-scripts" />

interface CardProps {
	width?: number;
	height?: number;
	title?: string;
	content?: string;
	titleSize?: string;
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
