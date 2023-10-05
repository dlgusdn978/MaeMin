import React from 'react';
import Card from '../components/Card';
import { Container, FlexBox } from '../components/style/common';
import testImg from '../assets/imgs/pastatest.png';
import { HomeTitle } from '../components/text';
import Button from '../components/Button';

const foodList = [
	{
		storeId: 1,
		category: [1],
		name: '라구파스타',
		price: 13000,
		menuPictureUrl: testImg,
		popularity: 0,
	},
	{
		storeId: 1,
		category: [1],
		name: '라구파스타',
		price: 13000,
		menuPictureUrl: testImg,
		popularity: 0,
	},
];

const StoreMenu = () => {
	const addMenu = () => {
		// 메뉴추가
		console.log('메뉴추가');
	};
	return (
		<Container>
			<FlexBox dir="row">
				<HomeTitle>메뉴 리스트</HomeTitle>
				<Button
					label="메뉴 추가"
					onClick={addMenu}
					backgroundColor="rgba(255, 182, 73, 1)"
					fontSize="16px"
					margin="10px"
					textColor="white"
					borderRadius="100px"
					width={85}
					height={55}
					borderColor="rgb(240, 240, 240)"
				/>
			</FlexBox>
			<FlexBox dir="column">
				<FlexBox dir="row">
					{foodList.map((item) => {
						return (
							<Card
								title={item.name}
								content={`${item.price} 원`}
								titleSize="24px"
								imgSrc={item.menuPictureUrl}
								width={200}
							/>
						);
					})}
					<Card
						title="구라파스타"
						content="1234 원"
						titleSize="24px"
						imgSrc={testImg}
						width={200}
						flag={true}
					/>
				</FlexBox>
			</FlexBox>
		</Container>
	);
};

export default StoreMenu;
