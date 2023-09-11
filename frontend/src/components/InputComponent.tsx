import React, { ChangeEvent, FC } from 'react';

interface InputComponentProps {
	value: string;
	placeholder?: string;
	type?: string;
	onChange: (value: string) => void;
	style?: React.CSSProperties; // style prop 추가
}

const InputComponent: FC<InputComponentProps> = ({ value, placeholder, type, onChange, style }) => {
	// type과 style prop 추가
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<input type={type || 'text'} value={value} placeholder={placeholder} onChange={handleChange} style={style} />
	); // type과 style 적용
};

export default InputComponent;
