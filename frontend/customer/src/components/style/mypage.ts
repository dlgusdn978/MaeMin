import styled from 'styled-components';

export const ImageContainer = styled.div`
	position: relative;
	width: 300px;
	height: 400px;
	background-size: cover;
	background-position: center;
	padding: 20px;
	margin-bottom: 20px;
	border-radius: 10px;
`;
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
	margin: 0 20px;
	width: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 1px;
	background-color: white;
	justify-content: flex-start;
	flex-direction: row;
`;
export const UserPayItem = styled.div`
	display: flex;
	overflow: hidden;
	flex-direction: column;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 15px;
`;
export const UserPayInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 20px 30px;
`;
export const UserPayNotice = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	background-color: rgba(255, 182, 73, 0.7);
	padding: 10px 30px;
	font-size: 14px;
	font-weight: 400;
`;
export const UserInfoItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	& > :first-child {
		display: flex;
		align-items: center;
		font-size: 24px;
	}
	& > :last-child {
		display: flex;
		align-items: center;
		font-size: 16px;
	}
`;

export const MyOrderHistory = styled.div`
	background-color: #ffffff;
	padding: 20px;
	width: 100%;
	display: flex;
	flex-direction: column;
`;
export const MyPayInfo = styled.div`
	padding: 20px;
`;
export const BackgroundImage = styled.img`
	position: absolute;
	z-index: 1;
	width: 350px;
	height: 620px;
`;

export const OrderText = styled.div`
	position: relative;
	z-index: 2;
	padding: 20px;
	color: blue;
`;

export const CardContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	color: #fff;

	div,
	p {
	}
`;

export const NoticeBox = styled.div`
	background-color: white;
	padding: 20px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: min(30px);
`;
export const NoticeItem = styled.div``;
