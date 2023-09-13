import React from 'react';
import styled from 'styled-components';

const MenuInfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 10px;
`;

const MenuDetail = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;

const MenuName = styled.div`
	font-size: 15px;
`;

const MenuPrice = styled.div`
	font-size: 15px;
	color: rgba(0, 0, 0, 0.5);
	margin-top: 10px;
`;

const MenuImage = styled.img`
	width: 80px;
	height: 68px;
	object-fit: cover;
	border-radius: 25px;
	align-self: center;
`;

interface MenuInfoProps {
	name: string;
	price: string;
	imageUrl: string;
}

const MenuInfo: React.FC<MenuInfoProps> = ({ name, price, imageUrl }) => {
	return (
		<MenuInfoContainer>
			<MenuDetail>
				<MenuName>{name}</MenuName>
				<MenuPrice>{price}</MenuPrice>
			</MenuDetail>
			<MenuImage src={imageUrl} alt={name} />
		</MenuInfoContainer>
	);
};

export default MenuInfo;
