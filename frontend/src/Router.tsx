import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

/** Router */
export function MainRoutes() {
	return useRoutes([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/signup',
			element: <Signup />,
		},
	]);
}
