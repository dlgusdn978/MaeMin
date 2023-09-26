import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainRoutes } from './Router';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
	return (
		<Router basename="/owner">
			<Provider store={store}>
				<Header />
				<MainRoutes />
			</Provider>
		</Router>
	);
}

export default App;
