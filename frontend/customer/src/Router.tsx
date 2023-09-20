import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import Trend from './pages/Trend';
import StoreDetail from './pages/StoreDetail';
import SearchHistory from './pages/SearchHistory';
import MenuDetail from './pages/MenuDetail';
import QrCodeReader from './components/QrScan';
import Basket from './pages/Basket';
import PaySelect from './pages/PaySelect';

export function MainRoutes() {
	return useRoutes([
		{
			path: '/',
			element: <Home />,
			children: [
				{
					path: 'home',
					element: <Home />,
				},
			],
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/signup',
			element: <Signup />,
		},
		{
			path: '/trend',
			element: <Trend />,
		},
		{
			path: '/search',
			element: <SearchHistory />,
		},
		{
			path: '/qr',
			element: <QrCodeReader />,
		},
		{
			path: '/store-detail/:storeId',
			element: <StoreDetail />,
		},
		{
			path: '/menu-detail/:menuId',
			element: <MenuDetail />,
		},
		{
			path: '/basket',
			element: <Basket />,
		},
		{
			path: '/paySelect',
			element: <PaySelect />,
		},

		{ path: '*', element: <PageNotFound /> },
	]);
}
