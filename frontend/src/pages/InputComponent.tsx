import React, { ChangeEvent, FC } from 'react';

interface InputComponentProps {
	value: string;
	placeholder?: string;
	onChange: (value: string) => void;
}

const InputComponent: FC<InputComponentProps> = ({ value, placeholder, onChange }) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return <input type="text" value={value} placeholder={placeholder} onChange={handleChange} />;
};

export default InputComponent;
