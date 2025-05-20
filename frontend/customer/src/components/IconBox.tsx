import React, { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

const IconDiv = styled.div<{ variant: string | undefined }>`
	:hover {
		cursor: pointer;
	}
	display: flex;
	align-items: center;
	justify-content: center;
	${({ variant }) => {
		switch (variant) {
			case 'lg':
				return css`
					width: 70px;
					height: 70px;
				`;
			case 'm':
				return css`
					width: 50px;
					height: 50px;
				`;
			case 'sm':
				return css`
					width: 25px;
					height: 25px;
				`;
			default:
				return css`
					width: 30px;
					height: 30px;
				`;
		}
	}}
`;

const Icon = styled.svg<{ focus: number }>`
	width: 25px;
	height: 25px;

	path {
		// fill: ${(props) => (props.focus ? 'rgba(255, 182, 73, 0.7)' : 'rgba(0, 0, 0, 0,5)')};
		stroke: ${(props) => (props.focus == 1 ? 'rgba(255, 182, 73, 0.7)' : 'rgba(0, 0, 0, 0.5)')};
	}
`;

const IconBox = ({ icon, variant, focus, onClick }: PropsWithChildren<IconProps>) => {
	return (
		<IconDiv variant={variant} onClick={onClick}>
			<Icon as={icon} focus={focus} />
		</IconDiv>
	);
};

export default IconBox;
