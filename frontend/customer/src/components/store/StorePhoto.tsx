import React from 'react';
import styled from 'styled-components';
import StarRate from './StarRate';
import subStore from '../../assets/imgs/subs-store.png';
import { StoreImg } from '../../pages/Trend';

interface StorePhotoProps {
	name: string;
	pictureUrl: StoreImg[];
	rating: number;
}

const StorePhotoContainer = styled.div`
	position: relative;
	background-color: white;
	width: 100%;
	display: flex;

	align-items: center;
	flex-direction: column;
`;

const FixedSizeImage = styled.img<{ width: string; height: string }>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	object-fit: fill;
`;

const StoreInfoContainer = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 15px;
`;

const RatingContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 18px;
	justify-content: center;
`;

const StoreName = styled.div`
	font-size: 24px;
	font-weight: 1000;
	margin: 10px;
	white-space: nowrap; //한줄로
`;

const StorePhoto = (props: StorePhotoProps) => {
	console.log(props);
	return (
		<StorePhotoContainer>
			<FixedSizeImage
				src={props.pictureUrl.length != 0 ? props.pictureUrl[0].storePicureUrl : subStore}
				alt={props.name}
				width={'100%'}
				height={'183px'}
			/>
			<StoreInfoContainer>
				<StoreName>{props.name}</StoreName>
				<RatingContainer>
					<StarRate rating={props.rating} />
					<div>{props.rating}</div>
				</RatingContainer>
			</StoreInfoContainer>
		</StorePhotoContainer>
	);
};

export default StorePhoto;
