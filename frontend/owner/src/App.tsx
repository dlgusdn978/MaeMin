import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainRoutes } from './Router';
import Header from './components/Header';

function App() {
	return (
		<Router basename="/owner">
			<Header />
			<MainRoutes />
		</Router>
	);
}

export default App;
