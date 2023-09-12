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
	// marginBottom?: string;
	// marginLeft?: string;
	// marginRight?: string;
	// marginTop?: string;
}

const InputComponent = ({
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
	border, // marginBottom,
	// marginLeft,
} // marginRight,
// marginTop,
: InputComponentProps) => {
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
				// marginBottom,
				// marginLeft,
				// marginRight,
				// marginTop,
			}}
		/>
	);
};

export default InputComponent;
