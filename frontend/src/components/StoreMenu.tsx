import React from 'react';
import MedalIcon from '../assets/imgs/medal.svg';
import styled from 'styled-components';
import MenuInfo from './MenuInfo';

const StoreMenuContainer = styled.div`
	position: relative;
	height: auto;
	min-width: 390px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-top: 10px;
	border: 3px solid rgba(255, 182, 73, 1);
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
`;

const StoreMenudName = styled.div`
	font-size: 24px;
	position: relative;
	margin-left: 10px;
`;

const StoreMenu = () => {
	return (
		<StoreMenuContainer>
			<ContentContainer>
				<img src={MedalIcon} alt="아이콘" />
				<StoreMenudName>트렌드 메뉴</StoreMenudName>
			</ContentContainer>
			<MenuInfo name="치킨" price="15,000원" imageUrl="https://example.com/chicken.jpg" />
			<MenuInfo name="피자" price="20,000원" imageUrl="https://example.com/pizza.jpg" />
			<MenuInfo name="피자" price="20,000원" imageUrl="https://example.com/pizza.jpg" />
			<MenuInfo name="피자" price="20,000원" imageUrl="https://example.com/pizza.jpg" />
			<MenuInfo name="피자" price="20,000원" imageUrl="https://example.com/pizza.jpg" />
			<MenuInfo name="피자" price="20,000원" imageUrl="https://example.com/pizza.jpg" />
			{/* 메뉴 컴포넌트가 들어와야함 */}
		</StoreMenuContainer>
	);
};

export default StoreMenu;
