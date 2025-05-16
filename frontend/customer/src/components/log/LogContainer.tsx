import React from 'react';
import styled from 'styled-components';

const LogContainer = styled.div`
	background-color: white;
	margin: 5px;
	padding: 14px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	box-shadow: 5px 5px 1px rgba(255, 182, 73, 0.8);
`;
const LogHeader = styled.div`
	font-size: 12px;
	color: rgba(0, 0, 0, 0.5);
`;
const LogContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	& > :first-child {
		font-weight: 700;
	}
`;
const LogFooter = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	padding: 5px 0;
`;
const LogTotalPrice = styled.div`
	display: flex;
	justify-content: space-between;
	font-weight: 500;
`;
const LogPayMethod = styled.div`
	display: flex;
	justify-content: space-between;
	font-weight: 300;
`;
const LogCard = (orderLog: MyOrder) => {
	const addRest = (price: number) => {
		return price.toLocaleString('ko-KR') + '원';
	};
	return (
		<LogContainer>
			<LogHeader>
				<div>{orderLog.createdDate.toString()}</div>
			</LogHeader>
			<LogContent>
				<div>{orderLog.storeName}</div>
				<div>{orderLog.menuList}</div>
				<div>{orderLog.requests}</div>
			</LogContent>
			<LogFooter>
				<LogTotalPrice>
					<div>{'결제금액'}</div>
					<div>{addRest(orderLog.totalPrice)}</div>
				</LogTotalPrice>
				<LogPayMethod>
					<div>{'결제방법'}</div>
					<div>{orderLog.paymentMethod}</div>
				</LogPayMethod>
			</LogFooter>
		</LogContainer>
	);
};
export default LogCard;
