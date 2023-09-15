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

interface DragItem {
	id: number;
	menu: string;
	menus: string[];
	dropId: string;
	isDone: boolean;
}

interface DragItemList {
	dragItems: DragItem[];
}
