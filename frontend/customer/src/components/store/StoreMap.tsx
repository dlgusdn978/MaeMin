import React from 'react';
import styled from 'styled-components';
import StoreMapIcon from '../../assets/imgs/storemap.svg';

interface StoreMapProps {
	address: string;
}

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
	margin-left: 5px;
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

const StoreMap = (props: StoreMapProps) => {
	return (
		<div>
			<StoreMapContainer>
				<ContentContainer>
					<img src={StoreMapIcon} alt="Tag" />
					<NavidName>위치정보</NavidName>
				</ContentContainer>
				<Navi></Navi>
				<NaviInfor>{props.address}</NaviInfor>
			</StoreMapContainer>
		</div>
	);
};

export default StoreMap;
