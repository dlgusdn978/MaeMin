import React from 'react';
import styled from 'styled-components';
import TagIcon from '../assets/imgs/tag.svg';

const TrendKeywordContainer = styled.div`
	position: relative;
	height: 52px;
	min-width: 390px;
	background-color: white;
	display: flex;
	flex-direction: column;
	margin-top: 10px;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const TrendName = styled.div`
	font-size: large;
	position: relative;
	margin-left: 10px;
`;

const TrendKeyword = () => {
	return (
		<TrendKeywordContainer>
			<ContentContainer>
				{/* 아이콘 */}
				<img src={TagIcon} alt="Tag" />

				{/* 트렌드 이름 */}
				<TrendName>트렌드 키워드</TrendName>
			</ContentContainer>
			<div>트랜드 키워드 나열~</div>
		</TrendKeywordContainer>
	);
};

export default TrendKeyword;
