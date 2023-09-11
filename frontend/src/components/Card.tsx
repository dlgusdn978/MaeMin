import React from 'react';
import styled from 'styled-components';
import { HomeCardContent, HomeCardTitle } from './text';

const CardContainer = styled.div<CardProps>`
	background-color: white;
	box-shadow: 1 1;
	width: ${({ width }) => (width ? `${width}px` : '345px')};
	height: 160px;
	border-radius: 10px;
	background: #fff;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	margin: 16px 14px;
`;

const CardTextBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const ImgBox = styled.div`
	width: 120px;
	display: flex;
	justify-content: flex-end;
	margin-top: 10px;
	float: right;
`;

const Card = ({ icon, iconSize, width, height, title, content }: IconProps & CardProps) => {
	return (
		<CardContainer width={width} height={height}>
			<CardTextBox>
				<HomeCardTitle>{title}</HomeCardTitle>
				<HomeCardContent>{content}</HomeCardContent>
			</CardTextBox>
			<ImgBox>{React.createElement(icon, { width: iconSize, height: iconSize })}</ImgBox>
		</CardContainer>
	);
};

export default Card;
