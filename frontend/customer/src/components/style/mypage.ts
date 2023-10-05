import styled from 'styled-components';

export const ImageContainer = styled.div`
	position: relative;
	width: 300px; // Adjust as per requirement
	height: 400px; // Adjust as per requirement
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
	background-color: #f8f8f8;
	padding: 20px;
	border-radius: 10px;
	h2 {
		font-size: 20px;
		margin-bottom: 15px;
	}
`;

export const CardContainer = styled.div`
	position: absolute;
	top: 0; // Adjust as per requirement
	left: 0; // Adjust as per requirement
	color: #fff;

	div,
	p {
		// Additional styles if needed
	}
`;
