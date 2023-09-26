import React from 'react';
import styled from 'styled-components';
import CallIcon from '../../assets/imgs/call.svg';
import ClockIcon from '../../assets/imgs/clock.svg';

interface StoreInfoProps {
	phone: string;
	operationHours: string;
}
const StoreInfoContainer = styled.div`
	position: relative;
	height: 92px;
	background-color: white;
	display: flex;
	flex-direction: column;
	margin-top: 10px;
`;

const CallImg = styled.img`
	height: 25px;
	width: 25px;
`;
const ClockImg = styled.img`
	height: 25px;
	width: 25px;
`;

const CallNumber = styled.div`
	font-size: 24px;
	margin-left: 10px;
	margin-right: 10px;
`;

const StoreTime = styled.div`
	font-size: 24px;
	position: relative;
	margin-left: 10px;
	margin-right: 10px;
`;

const CallContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 10px;
`;

const TimeContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 10px;
`;

const StoreInfo = (props: StoreInfoProps) => {
	const { phone, operationHours } = props;

	console.log({ phone });
	console.log(operationHours);

	return (
		<StoreInfoContainer>
			<CallContainer>
				<CallImg src={CallIcon} alt="Call Icon" />
				<CallNumber>번호</CallNumber>
				{phone}
			</CallContainer>
			<TimeContainer>
				<ClockImg src={ClockIcon} alt="Clock Icon" />
				<StoreTime>영업시간</StoreTime>
				{operationHours}
			</TimeContainer>
		</StoreInfoContainer>
	);
};

export default StoreInfo;
