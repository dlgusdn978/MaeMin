import API from './base';

export const getStoreList = (areaName: string) => {
	return API.post('/store-service/customer/find', {
		areaName,
	});
};

export const getStoreInfo = (storeId: number) => {
	return API.get(`/store-service/customer/stores/${storeId}`);
};
