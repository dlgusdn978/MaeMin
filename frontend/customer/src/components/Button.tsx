import React from 'react';
import styled, { css } from 'styled-components';
type ButtonVariant = 'filled' | 'outlined' | 'small';
interface ButtonProps {
	variant?: ButtonVariant;
	label?: string;
	margin?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	padding?: string;
	fontWeight?: string;
	margintop?: string | number;
	overflow?: string;
}
const TextButton = styled.button<ButtonProps>`
	fontsize: 16px;
	border-radius: 10px;
	width: 100%;
	height: 48px;
	border: 1px solid rgba(255, 182, 73, 1);
	&:focus {
		outline: none;
	}
	${({ variant, label }) => {
		switch (variant) {
			case 'filled':
				return css`
					background: rgba(255, 182, 73, 1);
					color: white;
				`;
			case 'outlined':
				return css`
					background: white;
					color: rgba(255, 182, 73, 1);
				`;
			case 'small':
				return css`
					background: rgba(255, 182, 73, 1);
					color: white;
					fontsize: 12px;
					width: ${label ? `${label.length * 20}px` : '57px'};
					height: 40px;
				`;
			default:
				return css`
					background: white;
					border: none;
				`;
		}
	}}
`;
const Button = (props: ButtonProps) => {
	const { variant, label, margin, onClick, padding, fontWeight, margintop } = props;

	return (
		<TextButton
			style={{
				margin: margin,
				padding: padding,
				fontWeight: fontWeight,
				marginTop: margintop,
			}}
			onClick={onClick}
			variant={variant}
		>
			{label}
		</TextButton>
	);
};

export default Button;
