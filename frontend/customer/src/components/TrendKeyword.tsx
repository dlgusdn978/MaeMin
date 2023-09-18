import React from 'react';
import styled from 'styled-components';
import TagIcon from '../assets/imgs/tag.svg';

const TrendKeywordContainer = styled.div`
	position: relative;
	height: 52px;
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
	font-size: 24px;
	position: relative;
	margin-left: 10px;
`;

const TrendList = styled.div`
	font-size: 18px;
	position: relative;
	margin-left: 36px;
`;

const TrendKeyword = () => {
	return (
		<TrendKeywordContainer>
			<ContentContainer>
				<img src={TagIcon} alt="Tag" />
				<TrendName>트렌드 키워드</TrendName>
			</ContentContainer>
			<TrendList>트랜드 키워드 나열~</TrendList>
		</TrendKeywordContainer>
	);
};

export default TrendKeyword;
