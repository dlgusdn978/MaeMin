import React from 'react';
import Card from '../components/Card';
import { Container, FlexBox } from '../components/style/common';
import testImg from '../assets/imgs/pastatest.png';
import { HomeTitle } from '../components/text';

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
	return (
		<Container>
			<FlexBox dir="row">
				<HomeTitle>메뉴 리스트</HomeTitle>
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
