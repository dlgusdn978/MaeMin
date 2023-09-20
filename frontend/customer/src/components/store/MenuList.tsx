import React from 'react';
import { useDispatch } from 'react-redux';
import { setMenu } from '../../store/menuSlice';
import styled from 'styled-components';
import MenuInfo from '../menu/MenuInfo';
import { MenuData } from '../../pages/StoreDetail';

interface MenuListProps {
	menu: MenuData[];
	title: string;
	iconSrc: string;
	popularity: number;
}

const MenuContainer = styled.div<{ popularity: number }>`
	position: relative;
	height: auto;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-top: 20px;
	border: ${(props) => (props.popularity === 1 ? '3px solid rgba(255, 182, 73, 1)' : 'none')};
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	margin-left: 4px;
`;

const MenuName = styled.div`
	font-size: 24px;
	position: relative;
	margin-left: 10px;
`;

const MenuList = ({ menu, title, iconSrc, popularity }: MenuListProps) => {
	const dispatch = useDispatch();

	const handleMenuClick = (menu: MenuData) => {
		const formattedPrice = parseInt(menu.price.toString().replace(/,/g, ''), 10).toLocaleString();
		dispatch(setMenu({ name: menu.name, price: formattedPrice, menuPictureUrl: menu.menuPictureUrl }));
	};

	return (
		<MenuContainer popularity={popularity}>
			<ContentContainer>
				<img src={iconSrc} alt="아이콘" />
				<MenuName>{title}</MenuName>
			</ContentContainer>
			{menu.map((item, index) => (
				<MenuInfo
					key={index}
					name={item.name}
					price={item.price.toString()}
					imageUrl={item.menuPictureUrl}
					menuId={item.menuId.toString()}
					onClick={() => handleMenuClick(item)}
				/>
			))}
		</MenuContainer>
	);
};

export default MenuList;
