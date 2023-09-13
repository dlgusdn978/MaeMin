import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackarrowIcon from '../assets/imgs/backarrow.svg';
import SharboxIcon from '../assets/imgs/sharebox.svg';

const StorePhotoContainer = styled.div`
	position: relative;
	height: 224px;
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
	/* margin: 20px; */
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
`;

const StorePhoto = () => {
	const navigate = useNavigate();

	const navigateToPreviousPage = () => {
		navigate(-1);
	};

	return (
		<StorePhotoContainer>
			<BackButton onClick={navigateToPreviousPage}>
				<img src={BackarrowIcon} alt="Go back" />
			</BackButton>

			<FixedSizeImage src="store_photo_url_her" alt="Store Photo" />

			<ShareButton>
				<img src={SharboxIcon} alt="Share" />
			</ShareButton>
		</StorePhotoContainer>
	);
};

export default StorePhoto;
