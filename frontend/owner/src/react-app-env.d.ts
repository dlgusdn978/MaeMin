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

interface SignupForm {
	loginId: string;
	loginPw: string;
	userName: string;
	nickName: string;
	phone: string;
	sex: boolean; //-> False=남자 / True=여자
	age: number;
	role: string; // ROLE_CUSTOMER or ROLE_OWNER
}

interface User {
	username: string;
	nickname: string;
	role: string;
}

interface LoginForm {
	loginId: string;
	loginPw: string;
}

interface LoginRes {
	code: string;
	message: string;
	data: {
		accessToken: string;
		expiredTime: string;
	};
}
