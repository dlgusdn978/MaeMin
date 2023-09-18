import React from 'react';
import StorePhoto from '../components/StorePhoto';
import TrendKeyword from '../components/TrendKeyword';
import StoreMap from '../components/StoreMap';
import StoreMenu from '../components/StoreMenu';

const StoreDetail = () => {
	return (
		<div>
			{/* StorePhoto 컴포넌트 렌더링 */}

			<StorePhoto />
			<TrendKeyword />
			<StoreMap />
			<StoreMenu />
		</div>
	);
};

export default StoreDetail;
