/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { getCurLoc } from '../../api/map';
import { locationActions } from '../../store/locationSlice';
import { getStoreList } from '../../api/store';
import { OverlayContainer, OverlayTitleBox } from '../CustomOverlay';
import { getLocationByAddress } from '../../hooks/getLocationByAddress';
import chicken from '../../assets/imgs/chicken.png';
import rice from '../../assets/imgs/rice.png';
import sushi from '../../assets/imgs/sushi.png';
import myLoc from '../../assets/imgs/myLoc.png';
const { kakao } = window;

declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		kakao: any;
	}
}

const MapContainer = () => {
	const location = useSelector((state: RootState) => state.location);
	const [address, setAddress] = useState<string>('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const moveTo = (id: string) => {
		navigate(`/store-detail/${id}`);
	};
	const getImage = (props: string) => {
		console.log(props);
		if (props === '치킨') return chicken;
		else if (props === '한식') return rice;
		else return sushi;
	};
	const [marketData, setMarketData] = useState<any[]>([]);

	useEffect(() => {
		const getLocation = async () => {
			const lng = location.lng ? location.lng : 127.0495556;
			const lat = location.lat ? location.lat : 37.514575;
			dispatch(locationActions.setLocation(location));
			try {
				const response = await getCurLoc(lng, lat);
				const [city, county, district] = response.data.documents[0].address_name.split(' ');
				console.log(district);
				setAddress(city + ' ' + county);
			} catch (err) {
				console.log(err);
			}
		};
		getLocationByAddress('동일로22길 51').then((response) => console.log(response));
		getLocation();
	}, []);
	useEffect(() => {
		const getMarket = async () => {
			try {
				const res = await getStoreList(address);
				const marketList = res.data.map((item: storeProps) => ({
					latlng: new window.kakao.maps.LatLng(item.latitude, item.longitude),
					title: item.name,
					storeId: item.storeId,
					content: item.content,
					phone: item.phone,
					category: item.category,
				}));
				setMarketData(marketList);
			} catch (err) {
				console.log(err);
			}
		};
		getMarket();
	}, [address]);

	const setMarkers = (map: any) => {
		console.log(marketData);
		marketData.forEach((obj) => {
			console.log(obj.category);
			const marker = new kakao.maps.Marker({
				map: map,
				position: obj.latlng,
				title: obj.title,
				clickable: true,
				state: true,
				image: new kakao.maps.MarkerImage(getImage(obj.category), new kakao.maps.Size(32, 32)),
			});
			// 마커에 표시할 인포윈도우를 생성합니다

			// const url = `http://localhost:3000/customer/store-detail/${obj.storeId}`;
			const content = document.createElement('div');
			content.className = 'wrap';
			content.setAttribute('style', OverlayContainer(obj.title.length));
			content.innerHTML =
				`        <div class="title" style="${OverlayTitleBox}">` + '<span>' + obj.title + '</span>';

			content.addEventListener('click', () => {
				moveTo(obj.storeId);
			});
			const overlay = new window.kakao.maps.CustomOverlay({
				content: content,
				// 인포윈도우에 표시할 내용
				removable: true,
				position: marker.getPosition(),
			});
			// 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
			// 이벤트 리스너로는 클로저를 만들어 등록합니다
			// 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
			// kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
			window.kakao.maps.event.addListener(marker, 'click', makeClickListener(map, marker, overlay));

			// kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
		});
	};

	// 인포윈도우 클릭하여 표시하는 함수
	function makeClickListener(map: any, marker: any, overlay: any) {
		return function () {
			!marker.state ? overlay.setMap(map) : overlay.setMap(null);
			marker.state = !marker.state;
		};
	}

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
			image: new kakao.maps.MarkerImage(myLoc, new kakao.maps.Size(32, 32)),
		});

		const map = new kakao.maps.Map(container, options);

		mainMarker.setMap(map); // 메인 위치 set
		setMarkers(map); // 마커 배열 set
		console.log(map);
		console.log(marketData);
	}, [marketData]);

	return (
		<div className="kakaomap">
			<div id="map" style={{ width: '390px', height: '300px' }} />
		</div>
	);
};

export default MapContainer;
