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
	url?: string;
	width?: number;
	height?: number;
	title?: string;
	content?: string;
	titleSize?: string;
	onClick?: React.MouseEventHandler<HTMLElement>;
	count?: number;
}

type FontSizeProps = {
	fontSize?: string;
};

type SlideFlag = {
	active?: boolean;
};

interface SliderProps {
	/** 슬라이더 아이템 요소 */
	children: React.ReactNode;
	/** 커스텀 클래스 */
	className?: string;
	/** 자동재생 (속도 설정시 number 타입으로) */
	autoplay?: boolean | number;
	/** 슬라이더 속도 */
	speed?: number;
	/** 반복 여부 */
	loop?: boolean;
	keyword?: string;
	slideToShow?: number;
	background?: string;
	dots?: boolean;
}

interface CarouselProps {
	trendword: string;
}

interface TallProps {
	height?: string;
}

type HoverProps = {
	width?: number;
	height?: number;
};

interface SearchProps {
	placeholder?: string;
}

interface SelectProps {
	list?: string[];
	width?: string;
	onChange?: (selectOpt: string) => void;
	selectRef?: React.ForwardRef<HTMLSelectElement>;
}

interface NavigationProps {
	title?: string;
}

interface InputProps {
	width?: string;
}

interface locationState {
	lat: number | undefined;
	lng: number | undefined;
}

interface LaMa {
	La: number | undefined;
	Ma: number | undefined;
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
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	userInfo: any;
	data: {
		accessToken: string;
		expiredTime: string;
	};
}

interface booleanState {
	checker: boolean;
}
