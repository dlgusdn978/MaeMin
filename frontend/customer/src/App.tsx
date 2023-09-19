import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainRoutes } from './Router';
import Layout from './components/layout/Layout';
import useGeolocation from './hooks/useGeolocation';
import { locationActions } from './store/locationSlice';
import { useDispatch } from 'react-redux';
// import { dispatch } from './hooks/constant';

function App() {
	const dispatch = useDispatch();
	const location = useGeolocation();
	console.log(location.coordinates);
	const locationInfo = location.coordinates;
	const myLocation = {
		lat: locationInfo?.lat,
		lng: locationInfo?.lng,
	};
	console.log(myLocation);
	dispatch(locationActions.setLocation(myLocation));

	return (
		<Router>
			<Layout>
				<MainRoutes />
			</Layout>
		</Router>
	);
}

export default App;
