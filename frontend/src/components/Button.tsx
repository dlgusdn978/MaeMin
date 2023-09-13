import React from 'react';

interface ButtonComponentProps {
	label: string;
	backgroundColor?: string;
	fontSize?: string;
	margin?: string;
	borderRadius?: string;
	textColor?: string;
	width?: string | number;
	height?: string | number;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	disabled?: boolean;
	borderColor?: string;
}

const Button: React.FC<ButtonComponentProps> = ({
	label,
	backgroundColor,
	fontSize,
	margin,
	borderRadius,
	textColor,
	width,
	height,
	onClick,
	disabled,
	borderColor,
}) => {
	return (
		<button
			style={{
				backgroundColor: backgroundColor ? `${backgroundColor}` : 'white',
				fontSize: fontSize,
				margin: margin,
				borderRadius: borderRadius,
				color: textColor,
				width: width,
				height: height,
				border: borderColor ? `1px solid ${borderColor}` : '1px solid #D2B6B6',
			}}
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	);
};

export default Button;
