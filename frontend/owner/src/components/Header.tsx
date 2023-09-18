import React from 'react';
import { HeaderContainer, HeaderDiv } from './style/header';
import { BoldText } from './style/common';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const HeaderList = [
		{ name: '주문 접수', url: '/order' },
		{ name: '매장 관리', url: '/store-management' },
		{ name: '매장 분석', url: '/store-analysis' },
	];
	const navigate = useNavigate();
	return (
		<HeaderContainer>
			{HeaderList.map((item, i) => {
				return (
					<HeaderDiv
						key={i}
						onClick={() => {
							navigate(item.url);
						}}
					>
						<BoldText>{item.name}</BoldText>
					</HeaderDiv>
				);
			})}
		</HeaderContainer>
	);
};

export default Header;
