import React from 'react';
import { useRoutes } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import Order from './pages/Order';
import StoreManagement from './pages/StoreManagement';
import StoreAnalysis from './pages/StoreAnalysis';

/** Router */
export function MainRoutes() {
	return useRoutes([
		{
			path: '/',
			element: <Main />,
			children: [
				{
					path: 'main',
					element: <Main />, // 유저정보 없으면 로그인 회원가입 띄움
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
			path: '/order',
			element: <Order />,
		},
		{
			path: '/store-management',
			element: <StoreManagement />,
		},
		{
			path: '/store-analysis',
			element: <StoreAnalysis />,
		},
		{ path: '*', element: <PageNotFound /> },
	]);
}
