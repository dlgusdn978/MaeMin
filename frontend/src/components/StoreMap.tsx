import React from 'react';
import styled from 'styled-components';
import StoreMapIcon from '../assets/imgs/storemap.svg';

const StoreMapContainer = styled.div`
	position: relative;
	height: 176px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 10px;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const NavidName = styled.div`
	font-size: 24px;
	position: relative;
	margin-left: 10px;
`;

const Navi = styled.div`
	width: 375px;
	height: 102px;
	background-image: url('지도 정보 들어갈곳');
	background-size: cover;
	background-position: center;
`;

const NaviInfor = styled.div`
	text-align: center;
	color: rgba(0, 0, 0, 0.5);
`;

const StoreMap = () => {
	return (
		<div>
			<StoreMapContainer>
				<ContentContainer>
					<img src={StoreMapIcon} alt="Tag" />
					<NavidName>지도</NavidName>
				</ContentContainer>
				<Navi></Navi>
				<NaviInfor>광주광역시 광산구~~</NaviInfor>
			</StoreMapContainer>
		</div>
	);
};

export default StoreMap;
