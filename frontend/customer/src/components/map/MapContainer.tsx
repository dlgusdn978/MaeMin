/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { getCurLoc } from '../../api/map';
import { locationActions } from '../../store/locationSlice';
const { kakao } = window;

declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		kakao: any;
	}
}

const MapContainer = () => {
	const location = useSelector((state: RootState) => state.location);
	const [curAddress, setCurAddress] = useState<string>('');
	const dispatch = useDispatch();

	useEffect(() => {
		const lng = location.lng ? location.lng : 127.0495556;
		const lat = location.lat ? location.lat : 37.514575;
		dispatch(locationActions.setLocation(location));
		getCurLoc(lng, lat)
			.then((response) => setCurAddress(response.data.documents[0].address_name))
			.catch((response) => console.log(response.data));
	}, []);
	const markers: any[] = [
		// trend단어선택시 리스트 변경되야댐
		{
			latlng: new window.kakao.maps.LatLng(33.45023, 126.572965),
			title: 'test1',
		},
		{
			latlng: new window.kakao.maps.LatLng(33.455529, 126.561838),
			title: 'test2',
		},
	];

	const setMarkers = (map: any) => {
		markers.forEach((obj) => {
			const marker = new window.kakao.maps.Marker({
				map: map,
				position: obj.latlng,
				title: obj.title,
			});
			// 마커에 표시할 인포윈도우를 생성합니다
			const infowindow = new kakao.maps.InfoWindow({
				content: obj.title, // 인포윈도우에 표시할 내용
			});

			// 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
			// 이벤트 리스너로는 클로저를 만들어 등록합니다
			// 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
			kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
			kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
		});
	};

	// 인포윈도우를 표시하는 클로저를 만드는 함수입니다
	function makeOverListener(map: any, marker: any, infowindow: any) {
		return function () {
			infowindow.open(map, marker);
		};
	}

	// 인포윈도우를 닫는 클로저를 만드는 함수입니다
	function makeOutListener(infowindow: any) {
		return function () {
			infowindow.close();
		};
	}
	const init = (map: any) => {
		window.kakao.maps.event.addListener(map, 'click', function (mouseEvent: any) {
			// 클릭한 위치에 마커를 표시합니다
			console.log(mouseEvent.latLng);
		});
	};

	useEffect(() => {
		const container = document.getElementById('map');
		const mainPosition = new kakao.maps.LatLng(location.lat, location.lng);

		const options = {
			center: location
				? new kakao.maps.LatLng(location.lat, location.lng)
				: new kakao.maps.LatLng(37.420125, 127.126665),
			level: 5,
		};

		const mainMarker = new kakao.maps.Marker({
			position: mainPosition,
		});

		const map = new kakao.maps.Map(container, options);

		init(map);
		mainMarker.setMap(map); // 메인 위치 set
		setMarkers(map); // 마커 배열 set
	}, [location]);

	return (
		<div className="kakaomap">
			<div>현 위치 : {curAddress} </div>
			<div id="map" style={{ width: '390px', height: '300px' }} />
		</div>
	);
};

export default MapContainer;
