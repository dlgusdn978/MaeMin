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
	height: 300px;
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

const StoreInfoContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StoreName = styled.div`
	font-size: 24px;
	margin-bottom: 8px; // 간격을 조절하면 이름과 평점 사이의 간격이 조정됩니다.
`;

const Rating = styled.div`
	font-size: 24px;
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
				<StoreName>{props.name}</StoreName>
				<Rating>
					<StarRate rating={props.rating} />
				</Rating>
			</StoreInfoContainer>
			<ShareButton>
				<img src={SharboxIcon} alt="Share" />
			</ShareButton>
		</StorePhotoContainer>
	);
};

export default StorePhoto;
