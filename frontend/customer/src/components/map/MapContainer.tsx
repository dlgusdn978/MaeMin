import { useEffect } from 'react';

const { kakao } = window;

declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		kakao: any;
	}
}

const MapContainer = () => {
	useEffect(() => {
		const container = document.getElementById('map');
		const options = {
			center: new kakao.maps.LatLng(37.420125, 127.126665),
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
