import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MenuInfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 5px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const MenuDetail = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;

const MenuName = styled.div`
	font-size: 15px;
	margin: 10px;
	margin-bottom: 10px;
	white-space: nowrap;
	margin-left: 10px;
`;

const MenuPrice = styled.div`
	font-size: 15px;
	color: rgba(0, 0, 0, 0.5);
	margin-left: 10px;
`;

const MenuImage = styled.img`
	width: 80px;
	height: 68px;
	object-fit: cover;
	border-radius: 25px;
	align-self: center;
	margin-left: 200px;
	margin-bottom: 10px;
`;

interface MenuInfoProps {
	name: string;
	price: string;
	imageUrl: string;
	menuId: string;
	onClick: () => void;
}

const MenuInfo = (props: MenuInfoProps) => {
	const { name, price, imageUrl, menuId, onClick } = props;
	const formattedPrice = parseInt(price.replace(/,/g, ''), 10).toLocaleString() + '원';
	const navigate = useNavigate();

	const handleCombinedClick = () => {
		onClick();
		navigate(`/menu-detail/${menuId}`);
	};

	return (
		<MenuInfoContainer onClick={handleCombinedClick}>
			<MenuDetail>
				<MenuName>{name}</MenuName>
				<MenuPrice>{formattedPrice}</MenuPrice>
			</MenuDetail>
			<MenuImage src={imageUrl} alt={name} />
		</MenuInfoContainer>
	);
};

export default MenuInfo;
