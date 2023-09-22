import React from 'react';
import Card from '../components/Card';
import { Container, FlexBox } from '../components/style/common';

const foodList = [
	{
		storeId: 1,
		category: [1],
		name: '라구파스타',
		price: 13000,
		menuPictureUrl: '이미지 주소',
		popularity: 0,
	},
	{
		storeId: 1,
		category: [1],
		name: '라구파스타',
		price: 13000,
		menuPictureUrl: '이미지 주소',
		popularity: 0,
	},
];

const StoreMenu = () => {
	return (
		<Container>
			<FlexBox dir="row">
				<div>메뉴 리스트</div>
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
				</FlexBox>
			</FlexBox>
		</Container>
	);
};

export default StoreMenu;
