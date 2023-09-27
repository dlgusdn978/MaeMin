import API from './base';

export const getStoreDetail = (storeId: number) =>
	API.get(`/store-service/customer/stores/${storeId}`).then((res) => res.data);
