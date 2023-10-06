import styled from 'styled-components';

export const MyPageHeader = styled.h1`
	font-size: 24px;
	color: #333;
	margin-bottom: 20px;
	margin-top: 20px;
	font-weight: 900;
	font-size: 50px;
`;

export const UserInfoBox = styled.div`
	background-color: #f8f8f8;
	padding: 20px;
	margin-bottom: 20px;
	border-radius: 10px;
	div {
		margin-top: 20px;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
		font-weight: 700;
	}
	width: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 10px;
	background-color: white;
	justify-content: space-evenly;
	flex-direction: row;
	padding: 20px 0;
`;

export const MyOrderHistory = styled.div`
	padding: 20px;
	position: relative;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	height: auto;
`;

export const CardContainer = styled.div`
	position: relative;
	width: 350px;
	height: 200px;
	margin-bottom: 20px;
`;

export const BackgroundImage = styled.img`
	position: absolute;
	z-index: 1;
	width: 100%;
	height: 100%;
	border-radius: 10px;
`;

export const OrderText = styled.div`
	position: absolute;
	z-index: 2;
	padding: 20px;
	color: black;
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: transparent;
`;

export const Font = styled.div`
	font-size: 25px;
	margin-bottom: 20px;
	margin-top: 20px;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
	font-weight: 700;
`;
