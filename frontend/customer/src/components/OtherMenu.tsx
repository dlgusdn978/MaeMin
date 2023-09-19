import React from 'react';
import { useDispatch } from 'react-redux';
import { setMenu } from '../store/menuSlice';
import MenuBoardIcon from '../assets/imgs/menuBoard.svg';
import styled from 'styled-components';
import MenuInfo from './MenuInfo';
import { MenuData } from '../pages/StoreDetail';

interface Menu {
	name: string;
	price: string;
}

interface OtherMenuProps {
	menu: MenuData[];
}

const StoreMenuContainer = styled.div`
	position: relative;
	height: auto;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-top: 20px;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	margin-left: 4px;
`;

const StoreMenuName = styled.div`
	font-size: 24px;
	position: relative;
	margin-left: 10px;
`;

const OtherMenu = ({ menu }: OtherMenuProps) => {
	const dispatch = useDispatch();

	const handleMenuClick = (menu: Menu) => {
		dispatch(setMenu(menu));
		console.log(menu);
	};

	return (
		<StoreMenuContainer>
			<ContentContainer>
				<img src={MenuBoardIcon} alt="아이콘" />
				<StoreMenuName>다른 메뉴</StoreMenuName>
			</ContentContainer>
			{menu.map((item, index) => (
				<MenuInfo
					key={index}
					name={item.name}
					price={item.price.toString()}
					imageUrl={item.menuPictureUrl}
					menuId={item.menuId.toString()}
					onClick={() => handleMenuClick({ name: item.name, price: item.price.toString() })}
				/>
			))}
		</StoreMenuContainer>
	);
};

export default OtherMenu;
