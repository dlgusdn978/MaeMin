import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
}

const ButtonComponent: FC<ButtonComponentProps> = ({ label, ...props }) => {
	return <button {...props}>{label}</button>;
};

export default ButtonComponent;
