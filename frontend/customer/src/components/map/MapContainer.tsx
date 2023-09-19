import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const { kakao } = window;

declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		kakao: any;
	}
}

const MapContainer = () => {
	const location = useSelector((state: RootState) => state.location);
	console.log(location);
	useEffect(() => {
		const container = document.getElementById('map');
		const options = {
			center: location
				? new kakao.maps.LatLng(location.lat, location.lng)
				: new kakao.maps.LatLng(37.420125, 127.126665),
			level: 3,
		};

		const map = new kakao.maps.Map(container, options);
		console.log(map);
	}, []);

	return (
		<div className="kakaomap">
			<div id="map" style={{ width: '390px', height: '300px' }} />
		</div>
	);
};

export default MapContainer;
