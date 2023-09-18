import styled from 'styled-components';

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	background: '#000';
	width: 100%;
	height: 100px;
`;

export const HeaderDiv = styled.div`
	background-color: gray;
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	:hover {
		cursor: pointer;
	}
	border: 1px solid '#f0f0f0';
`;
