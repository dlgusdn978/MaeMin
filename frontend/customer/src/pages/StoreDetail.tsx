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
import { getStoreDetail } from '../api/user';

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

	useEffect(() => {
		const fetchData = async () => {
			try {
				const storeId = 1; // 예시로 1로 설정

				const data = await getStoreDetail(storeId);
				setStoreData({
					ownerId: data.ownerId,
					name: data.name,
					category: data.category,
					pictureUrl: data.pictureUrl[0]?.storePicureUrl, // 첫 번째 이미지 URL만 사용
					address: data.address,
					areaCode: data.area,
					phone: data.phone,
					content: data.content,
					operationHours: data.operationHours,
					closedDays: data.closeDays,
					rating: data.rating,
					dibsCount: data.dibsCount,
					reviewCount: data.reviewCount,
				});
				setMenuData(data.menuList);
			} catch (error) {
				console.error('There was an error fetching the data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<StoreTopButton />
			{storeData && (
				<StorePhoto name={storeData.name} pictureUrl={storeData.pictureUrl} rating={storeData.rating} />
			)}
			{storeData && <TrendKeyword content={storeData.content} />}
			{storeData && <StoreInfo phone={storeData.phone} operationHours={storeData.operationHours} />}
			{storeData && <StoreMap address={storeData.address} />}
			<MenuList
				menu={menuData.filter((menu) => menu.popularity === 1)}
				title="트렌드 메뉴"
				iconSrc={MedalIcon}
				popularity={1}
			/>
			<MenuList
				menu={menuData.filter((menu) => menu.popularity === 0)}
				title="다른 메뉴"
				iconSrc={MenuBoardIcon}
				popularity={0}
			/>
		</div>
	);
};

export default StoreDetail;
