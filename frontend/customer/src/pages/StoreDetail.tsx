import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import StorePhoto from '../components/store/StorePhoto';
import StoreMap from '../components/store/StoreMap';
import MenuList from '../components/store/MenuList';
import MedalIcon from '../assets/imgs/medal.svg';
import MenuBoardIcon from '../assets/imgs/menuBoard.svg';
import TrendKeyword from './../components/store/TrendKeyword';

interface StoreDetailData {
	ownerId: number;
	name: string;
	category: number[];
	pictureUrl: string;
	address: string;
	areaCode: number;
	phone: string;
	content: string;
	operationHours: string;
	closedDays: string;
	rating: number;
	dibsCount: number;
	reviewCount: number;
}

export interface MenuData {
	menuId: number;
	storeId: number;
	category: number[];
	name: string;
	price: number;
	menuPictureUrl: string;
	popularity: number;
}

const StoreDetail = () => {
	const [storeData, setStoreData] = useState<StoreDetailData | null>(null);
	const [menuData, setMenuData] = useState<MenuData[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// 백엔드로부터 데이터를 가져옵니다.
				// const response = await axios.get('/api/store-detail');

				// 더미 데이터 설정
				const dummyData: StoreDetailData = {
					ownerId: 1,
					name: 'BBQ치킨 장덕점',
					category: [0, 2],
					pictureUrl:
						'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fthumb2.gettyimageskorea.com%2Fimage_preview%2F700%2F202006%2FFKF%2F1251448544.jpg&type=a340',
					address: '광주 광산구 풍영로 251',
					areaCode: 29200,
					phone: '가게 전화번호',
					content: '가게 소개글',
					operationHours: '운영시간',
					closedDays: '휴무일',
					rating: 4.5,
					dibsCount: 65,
					reviewCount: 39,
				};
				setStoreData(dummyData);
				const dummyMenuData: MenuData[] = [
					{
						menuId: 2,
						storeId: 1,
						category: [1],
						name: '음식2',
						price: 13000,
						menuPictureUrl:
							'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn.crowdpic.net%2Fdetail-thumb%2Fthumb_d_6E5CFD478A64807DB737AA9FB14BBCE4.png&type=a340',
						popularity: 0,
					},
					{
						menuId: 1,
						storeId: 2,
						category: [1],
						name: '음식1',
						price: 14000,
						menuPictureUrl:
							'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn.crowdpic.net%2Fdetail-thumb%2Fthumb_d_6E5CFD478A64807DB737AA9FB14BBCE4.png&type=a340',
						popularity: 1,
					},
				];
				setMenuData(dummyMenuData);
			} catch (error) {
				console.error('There was an error fetching the data:', error);
			}
		};

		fetchData();
	}, []);

	const trendMenus = menuData.filter((menu) => menu.popularity === 1);
	const otherMenus = menuData.filter((menu) => menu.popularity === 0);

	return (
		<div>
			{storeData && (
				<StorePhoto name={storeData.name} pictureUrl={storeData.pictureUrl} rating={storeData.rating} />
			)}
			<TrendKeyword />
			{storeData && <StoreMap address={storeData.address} />}
			<MenuList menu={trendMenus} title="트렌드 메뉴" iconSrc={MedalIcon} popularity={1} />
			<MenuList menu={otherMenus} title="다른 메뉴" iconSrc={MenuBoardIcon} popularity={0} />
		</div>
	);
};

export default StoreDetail;
