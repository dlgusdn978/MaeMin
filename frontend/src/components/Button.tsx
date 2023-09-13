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

const ButtonComponent: React.FC<ButtonComponentProps> = ({
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
				backgroundColor: backgroundColor,
				fontSize: fontSize,
				margin: margin,
				borderRadius: borderRadius,
				color: textColor,
				width: width,
				height: height,
				border: borderColor ? `1px solid ${borderColor}` : undefined,
			}}
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	);
};

export default ButtonComponent;
