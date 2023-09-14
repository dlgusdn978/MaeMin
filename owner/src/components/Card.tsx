import React from 'react';
import styled from 'styled-components';
import { HomeCardContent, HomeCardTitle } from './text';

const CardContainer = styled.div<CardProps>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: white;
	box-shadow: 1 1;
	width: ${({ width }) => (width ? `${width}px` : '345px')};
	height: 160px;
	border-radius: 10px;
	background: #fff;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	margin: 21px 14px;
	:hover {
		cursor: pointer;
	}
`;

const CardTextBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const ImgBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	padding-right: 15px;
	padding-bottom: 10px;
`;

const Card = ({ width, height, title, content, titleSize }: CardProps) => {
	return (
		<CardContainer width={width} height={height}>
			<CardTextBox>
				<HomeCardTitle fontSize={titleSize}>{title}</HomeCardTitle>
				<HomeCardContent>{content}</HomeCardContent>
			</CardTextBox>
		</CardContainer>
	);
};

export default Card;
