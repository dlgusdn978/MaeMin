import API from './base';

// export const getStoreDetail = (storeId: number) =>
// 	API.get(`/store-service/customer/stores/${storeId}`).then((res) => res.data);

export const getStoresByCategory = (category: number) =>
	API.get(`/store-service/customer/stores?category=${category}`).then((res) => res.data);
export const getStoreList = (areaName: string) => {
	return API.post('/store-service/customer/find', {
		areaName,
	});
};

export const getStoreInfo = (storeId: number) => {
	return API.get(`/store-service/customer/stores/${storeId}`);
};
