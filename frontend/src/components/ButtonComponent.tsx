import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	backgroundColor?: string;
	fontSize?: string;
	margin?: string;
	borderRadius?: string;
	textColor?: string;
	width?: string | number;
	height?: string | number;
}

const ButtonComponent: FC<ButtonComponentProps> = ({
	label,
	backgroundColor,
	fontSize,
	margin,
	borderRadius,
	textColor,
	width,
	height,
	...props
}) => {
	return (
		<button
			style={{
				backgroundColor: backgroundColor,
				fontSize: fontSize,
				margin: margin,
				borderRadius: borderRadius,
				color: textColor,
				width: width,
				height: height,
			}}
			{...props}
		>
			{label}
		</button>
	);
};

export default ButtonComponent;
