import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackarrowIcon from '../../assets/imgs/backarrow.svg';
import SharboxIcon from '../../assets/imgs/sharebox.svg';

interface StorePhotoProps {
	name: string;
	pictureUrl: string;
}

const StorePhotoContainer = styled.div`
	position: relative;
	height: 274px;
	background-color: white;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const BackButton = styled.button`
	position: absolute;
	top: 0;
	left: 0;
	background-color: white;
	border: none;
	margin-top: 25px;
	margin-left: 10px;
`;

const ShareButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	background-color: white;
	border: none;
	margin-top: 25px;
	margin-right: 10px;
`;

const FixedSizeImage = styled.img`
	width: 236px;
	height: 156px;
	object-fit: cover;
	border-radius: 40px;
`;
const StoreName = styled.div`
	font-size: 24px;
	position: absolute;
	left: 50%;
	bottom: 0;
	transform: translateX(-50%);
	text-align: center;
	margin-bottom: 18px;
`;

const StorePhoto = (props: StorePhotoProps) => {
	const navigate = useNavigate();

	const navigateToPreviousPage = () => {
		navigate(-1);
	};

	return (
		<StorePhotoContainer>
			<BackButton onClick={navigateToPreviousPage}>
				<img src={BackarrowIcon} alt="Go back" />
			</BackButton>
			{/* 이미지 URL과 가게 이름을 사용 */}
			<FixedSizeImage src={props.pictureUrl} alt={props.name} />
			<StoreName>{props.name}</StoreName>
			<ShareButton>
				<img src={SharboxIcon} alt="Share" />
			</ShareButton>
		</StorePhotoContainer>
	);
};

export default StorePhoto;
