import React from 'react';
import placeholderImage from '../../assets/imgs/subs-store.png';

interface StoreImageProps {
	imageUrl?: string;
	altDescription?: string;
}

const StoreImage = ({ imageUrl, altDescription }: StoreImageProps) => {
	return (
		<img
			src={imageUrl || placeholderImage}
			alt={altDescription || 'Store Image'}
			onError={(e) => {
				const target = e.target as HTMLImageElement;
				target.onerror = null;
				target.src = placeholderImage;
			}}
		/>
	);
};

export default StoreImage;
