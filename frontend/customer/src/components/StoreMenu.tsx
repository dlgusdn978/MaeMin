import React from 'react';
import { useDispatch } from 'react-redux';
import { setMenu } from '../store/menuSlice';
import MedalIcon from '../assets/imgs/medal.svg';
import styled from 'styled-components';
import MenuInfo from './MenuInfo';
import rose from '../assets/imgs/rose.jpg';
import pollack from '../assets/imgs/pollack.jpg';

interface Menu {
	name: string;
	price: string;
}
const StoreMenuContainer = styled.div`
	position: relative;
	height: auto;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-top: 20px;
	border: 3px solid rgba(255, 182, 73, 1);
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	margin-left: 4px;
`;

const StoreMenudName = styled.div`
	font-size: 24px;
	position: relative;
	margin-left: 10px;
`;

const StoreMenu = () => {
	const dispatch = useDispatch();

	const handleMenuClick = (menu: Menu) => {
		dispatch(setMenu(menu));
		console.log(menu);
	};
	return (
		<StoreMenuContainer>
			<ContentContainer>
				<img src={MedalIcon} alt="아이콘" />
				<StoreMenudName>트렌드 메뉴</StoreMenudName>
			</ContentContainer>
			<MenuInfo
				name="치킨"
				price="15000"
				imageUrl={rose}
				menuId="1"
				onClick={() => handleMenuClick({ name: '치킨', price: '15,000원' })}
			/>
			<MenuInfo
				name="피자"
				price="20000"
				imageUrl={pollack}
				menuId="2"
				onClick={() => handleMenuClick({ name: '피자', price: '20,000원' })}
			/>
			{/* 메뉴 컴포넌트가 들어와야함 */}
		</StoreMenuContainer>
	);
};

export default StoreMenu;
