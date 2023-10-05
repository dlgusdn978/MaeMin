import API from './base';

export const getStoreInfo = (storeId: number) => {
	return API.get(`https://j9c208.p.ssafy.io/store-service/customer/stores/${storeId}`);
};
