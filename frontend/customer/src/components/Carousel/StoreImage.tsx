import React from 'react';
import styled from 'styled-components';
import placeholderImage from '../../assets/imgs/subs-store.png';

interface StoreImageProps {
	imageUrl?: string;
	altDescription?: string;
	width: string;
	height: string;
}

const StyledImage = styled.img<{ width: string; height: string }>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	object-fit: cover;
	border-radius: 15px;
`;

const StoreImage = ({ imageUrl, altDescription, width, height }: StoreImageProps) => {
	return (
		<StyledImage
			src={imageUrl || placeholderImage}
			alt={altDescription || 'Store Image'}
			width={width}
			height={height}
			onError={(e) => {
				const target = e.target as HTMLImageElement;
				target.onerror = null;
				target.src = placeholderImage;
			}}
		/>
	);
};

export default StoreImage;
