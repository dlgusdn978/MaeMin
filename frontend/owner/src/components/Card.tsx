import React from 'react';
import { HomeCardContent, HomeCardTitle } from './text';
import { CardContainer, CardTextBox } from './style/card';

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
