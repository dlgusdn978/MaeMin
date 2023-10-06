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
	margin-bottom: 20px;
	border-radius: 10px;
	div {
		margin-top: 20px;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
		font-weight: 700;
	}
`;

export const MyOrderHistory = styled.div`
	padding: 20px;
	position: relative;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 600px;
`;

export const BackgroundImage = styled.img`
	position: absolute;
	z-index: 1;
	width: 350px;
	height: 600px;
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
