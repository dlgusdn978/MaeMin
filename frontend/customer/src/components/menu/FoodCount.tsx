import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
interface FoodCountProps {
	quantity: number;
	setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const FoodCountContainer = styled.div`
	position: relative;
	height: 50px;
	background-color: white;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 30px 15px;
`;

const CountName = styled.div`
	font-size: 18px;
	position: relative;
`;

const CountBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 30px;
	justify-contents: center;
	border: 1px solid rgba(0, 0, 0, 0.5);
	border-radius: 5px;
`;

const FoodCount = ({ quantity, setQuantity }: FoodCountProps) => {
	const handleIncrement = () => {
		setQuantity((prevQuantity) => {
			const newQuantity = prevQuantity + 1;
			console.log('Incrementing quantity:', newQuantity);
			return newQuantity;
		});
	};

	const handleDecrement = () => {
		if (quantity > 1) {
			setQuantity((prevQuantity) => {
				const newQuantity = prevQuantity - 1;
				console.log('Decrementing quantity:', newQuantity);
				return newQuantity;
			});
		}
	};

	return (
		<FoodCountContainer>
			<CountName>수량</CountName>
			<CountBox>
				<Button label="-" onClick={handleDecrement} />
				<span>{quantity}</span>
				<Button label="+" onClick={handleIncrement} />
			</CountBox>
		</FoodCountContainer>
	);
};

export default FoodCount;
