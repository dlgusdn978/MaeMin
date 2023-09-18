import React from 'react';
import StorePhoto from '../components/StorePhoto';
import TrendKeyword from '../components/TrendKeyword';
import StoreMap from '../components/StoreMap';
import StoreMenu from '../components/StoreMenu';
import OtherMenu from '../components/OtherMenu';
const StoreDetail = () => {
	return (
		<div>
			{/* StorePhoto 컴포넌트 렌더링 */}

			<StorePhoto />
			<TrendKeyword />
			<StoreMap />
			<StoreMenu />
			<OtherMenu />
		</div>
	);
};

export default StoreDetail;
