import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackarrowIcon from '../../assets/imgs/backarrow.svg';
import SharboxIcon from '../../assets/imgs/sharebox.svg';
import StarRate from './StarRate';

interface StorePhotoProps {
	name: string;
	pictureUrl: string;
	rating: number;
}

const StorePhotoContainer = styled.div`
	position: relative;
	height: 350px;
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
	margin-bottom: 60px;
`;

const StoreInfoContainer = styled.div`
	position: absolute;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const RatingContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 24px;
`;

const StoreName = styled.div`
	font-size: 24px;
	font-weight: 1000;
	margin: 10px;
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
			<FixedSizeImage src={props.pictureUrl} alt={props.name} />
			<StoreInfoContainer>
				<RatingContainer>
					<StarRate rating={props.rating} />
					<span style={{ marginLeft: '5px', marginTop: '104px' }}>{props.rating}</span>
				</RatingContainer>
				<StoreName>{props.name}</StoreName>
			</StoreInfoContainer>
			<ShareButton>
				<img src={SharboxIcon} alt="Share" />
			</ShareButton>
		</StorePhotoContainer>
	);
};

export default StorePhoto;
