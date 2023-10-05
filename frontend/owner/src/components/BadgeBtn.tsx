import React from 'react';
import Button from './Button';

const BadgeBtn = () => {
	const toggleButton = () => {
		console.log('clicked');
	};
	return (
		<Button
			label="test"
			onClick={toggleButton}
			backgroundColor="#F47805"
			fontSize="16px"
			margin="10px"
			textColor="white"
			borderRadius="100px"
			width={64}
			height={64}
			borderColor="rgb(240, 240, 240)"
		/>
	);
};

export default BadgeBtn;
