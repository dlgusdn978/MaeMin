import React, { ChangeEvent } from 'react';

interface InputComponentProps {
	value: string;
	placeholder?: string;
	type?: string;
	onChange: (value: string) => void;
	backgroundColor?: string;
	fontSize?: string;
	margin?: string;
	borderRadius?: string;
	width?: string | number;
	height?: string | number;
	border?: string;
}

const Input = ({
	value,
	placeholder,
	type,
	onChange,
	backgroundColor,
	fontSize,
	margin,
	borderRadius,
	width,
	height,
	border,
}: InputComponentProps) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<input
			type={type || 'text'}
			value={value}
			placeholder={placeholder}
			onChange={handleChange}
			style={{
				backgroundColor,
				fontSize,
				margin,
				borderRadius,
				width,
				height,
				border,
			}}
		/>
	);
};

export default Input;
