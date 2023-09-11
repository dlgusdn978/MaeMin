import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface IconTypeProps {
	width?: number;
	height?: number;
	color?: string;
}

type IconType = (props: IconTypeProps) => JSX.Element;

interface Props {
	iconSize?: number;
	icon: IconType;
	divSize?: number;
}

const IconDiv = styled.div`
	:hover {
		cursor: pointer;
		background-color: #999;
	}
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 70px;
	min-height: 70px;
`;

const IconBox = ({ icon, iconSize, divSize }: PropsWithChildren<Props>) => {
	return <IconDiv>{React.createElement(icon, { width: iconSize, height: iconSize })}</IconDiv>;
};

export default IconBox;
