import React, { useEffect, useState } from 'react';
// import axios from 'axios';  // 또는 사용하고 있는 HTTP 클라이언트
import StorePhoto from '../components/StorePhoto';
import TrendKeyword from '../components/TrendKeyword';
import StoreMap from '../components/StoreMap';
import StoreMenu from '../components/StoreMenu';
import OtherMenu from '../components/OtherMenu';

// 백엔드로부터 받을 데이터의 타입을 정의
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

	// useEffect를 사용하여 컴포넌트가 마운트될 때 데이터를 가져옵니다.
	useEffect(() => {
		const fetchData = async () => {
			try {
				// 백엔드로부터 데이터를 가져옵니다.
				// const response = await axios.get('/api/store-detail');  // API 엔드포인트를 적절하게 수정해주세요.

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
			} catch (error) {
				console.error('There was an error fetching the data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			{/* StorePhoto 컴포넌트에 props로 name과 pictureUrl을 전달 */}
			{storeData && <StorePhoto name={storeData.name} pictureUrl={storeData.pictureUrl} />}
			<TrendKeyword />
			<StoreMap />
			<StoreMenu />
			<OtherMenu />
		</div>
	);
};

export default StoreDetail;
