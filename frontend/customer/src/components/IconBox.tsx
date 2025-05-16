import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const IconDiv = styled.div`
	:hover {
		cursor: pointer;
	}
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 70px;
	min-height: 70px;
`;

const Icon = styled.svg<{ focus: number }>`
	width: 25px;
	height: 25px;

	path {
		// fill: ${(props) => (props.focus ? 'rgba(255, 182, 73, 0.7)' : 'rgba(0, 0, 0, 0,5)')};
		stroke: ${(props) => (props.focus == 1 ? 'rgba(255, 182, 73, 0.7)' : 'rgba(0, 0, 0, 0.5)')};
	}
`;

const IconBox = ({ icon, focus }: PropsWithChildren<IconProps>) => {
	return (
		<IconDiv>
			<Icon as={icon} focus={focus} />
		</IconDiv>
	);
};

export default IconBox;
