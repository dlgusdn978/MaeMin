import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import StorePhoto from '../components/store/StorePhoto';
import StoreMap from '../components/store/StoreMap';
import MenuList from '../components/store/MenuList';
import MedalIcon from '../assets/imgs/medal.svg';
import MenuBoardIcon from '../assets/imgs/menuBoard.svg';
import TrendKeyword from './../components/store/TrendKeyword';
import StoreInfo from './../components/store/StoreInfo';
import StoreTopButton from '../components/store/StoreTopButton';
import { useParams } from 'react-router-dom';
import { getStoreInfo } from '../api/store';
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

const StoreDetail = () => {
	const [storeData, setStoreData] = useState<StoreDetailData | null>(null);
	const [menuData, setMenuData] = useState<MenuData[]>([]);
	const params = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				getStoreInfo(Number(params.storeId)).then((response) => {
					console.log(response.data);
					setStoreData(response.data);
					setMenuData(response.data.menuList);
				});
			} catch (error) {
				console.error('There was an error fetching the data:', error);
			}
		};

		fetchData();
	}, []);

	const trendMenus = menuData.filter((menu) => menu.popularity === 10);
	const otherMenus = menuData.filter((menu) => menu.popularity === 0);

	return (
		<div>
			<StoreTopButton />
			{storeData && (
				<StorePhoto name={storeData.name} pictureUrl={storeData.pictureUrl} rating={storeData.rating} />
			)}
			<TrendKeyword />
			{storeData && <StoreInfo phone={storeData.phone} operationHours={storeData.operationHours} />}
			{storeData && <StoreMap address={storeData.address} />}
			<MenuList menu={trendMenus} title="트렌드 메뉴" iconSrc={MedalIcon} popularity={1} />
			<MenuList menu={otherMenus} title="다른 메뉴" iconSrc={MenuBoardIcon} popularity={0} />
		</div>
	);
};

export default StoreDetail;
