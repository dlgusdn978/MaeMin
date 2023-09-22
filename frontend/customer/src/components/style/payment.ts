import styled from 'styled-components';
// Payment
export const PaymentContainer = styled.div`
	width: 100%;
`;
export const PaymentTitleItem = styled.div`
	width: 90%;
	margin: 0 auto;
	padding: 10px 0;
	font-weight: bold;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
export const PaymentMenuBox = styled.div`
	width: 90%;
	background-color: white;
	margin: 0 auto;
`;
export const PaymentMenuInfoBox = styled.div`
	width: 100%;
	margin: 0 auto;
	margin-bottom: 10px;
	background-color: white;
	border-radius: 0 0 5px 5px;
	padding: 0 10px;
`;
export const PaymentMenuInfoItem = styled.div`
	padding: 10px;
	display: flex;
	justify-content: space-between;
`;
export const PaymentMenuInfo = styled.div``;

export const PaymentRequestBox = styled.div`
	width: 90%;
	margin: 0 auto;
	background-color: white;
`;
export const PaymentRequestContentItem = styled.div`
	width: 100%;
	padding: 10px;
`;

export const PaymentMethodBox = styled.div`
	width: 90%;
	background-color: white;
	margin: 5% auto;
`;

export const PaymentMethodContentBox = styled.div<{ selected: boolean }>`
	width: 80%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	border-radius: 10px;
	padding: 10px;
	background-color: ${(props) => (props.selected ? 'rgba(0, 0, 0, 0.1)' : 'white')};
	justify-content: center;
	transition: background-color 0.2s ease-in-out;
	& > :first-child {
		margin-right: 10%;
	}
`;

export const PaymentMethodContentItem = styled.div`
	width: 40%;
`;
export const PaymentMethodContentImg = styled.img`
	width: 50px;
	margin-right: 10px;
`;

// PayRegist
export const PayRegistContainer = styled.div`
	width: 90%;
	background-color: white;
	& div {
		margin-bottom: 10px;
	}
`;
export const PayRegistContentBox = styled.div`
	width: 80%;
	margin: 10px auto;
`;
export const PayRegistTitleItem = styled.div`
	font-weight: bold;
	font-size: 14px;
`;
export const PayRegistInputItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 6%;
	margin: auto;
`;
export const PayRegistButtonItem = styled.button`
	width: 100%;
	margin: 30% 0 10% 0;
	padding: 10px;
	border-radius: 5px;
	border: none;
	background-color: rgba(255, 182, 73, 0.9);
	color: white;
	font-weight: bold;
`;

// PayPassword
export const PayPasswordContainer = styled.div`
	width: 90%;
	background-color: white;
	margin: 0 auto;
`;
export const PayPasswordInputBox = styled.div`
	display: flex;
	justify-content: center;
	font-size: 32px;
	margin-top: 40%;
`;
export const PayPasswordInputItem = styled.div`
	opacity: 0.2;
	&.active {
		opacity: 1;
	}
`;
export const PayPasswordButtonBox = styled.div`
	margin-top: 50%;
	display: grid;
	grid-template-rows: repeat(4, 25%);
	grid-template-columns: repeat(3, 33%);
	align-items: center;
	justify-items: center;
`;
export const PayPasswordButtonItem = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 20% 0;
	cursor: pointer;
`;

//MyPay
export const MyPayContainer = styled.div``;
export const MyPayBox = styled.div`
	width: 90%;
	margin: 0 auto;
	height: 80vh;
	background-color: black;
	& * {
		padding: 5px 0;
	}
`;
export const MyPayDateBox = styled.div`
	display: flex;
	width: 93%;
	justify-content: flex-end;
	color: white;
	padding-top: 150px;
`;
export const MyPayImgBox = styled.div`
	display: flex;
	padding: 5%;
	justify-content: center;
`;
export const MyPayImg = styled.img`
	width: 300px;
`;

export const MyPayInfoBox = styled.div`
	width: 40%;
	margin: 0 auto;
	color: white;
	font-size: 12px;
	font-weight: bold;
`;
export const MyPayInfoItem = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const MyPayInfoTitle = styled.div``;
export const MyPayInfoValue = styled.div``;
export const MyPayButtonBox = styled.div`
	width: 60%;
	margin: 30px auto;
`;
