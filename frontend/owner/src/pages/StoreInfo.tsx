import React, { useEffect } from 'react';
import { Container, FlexBox } from '../components/style/common';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { CardContainer } from '../components/style/card';
import { logout } from '../api/user';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import styled from 'styled-components';

const data = [
	{
		date: '8.12',
		'20대': 40,
		'30대': 24,
		amt: 24,
	},
	{
		date: '8.19',
		'20대': 30,
		'30대': 13,
		amt: 22,
	},
	{
		date: '8.26',
		'20대': 20,
		'30대': 66,
		amt: 22,
	},
	{
		date: '9.2',
		'20대': 27,
		'30대': 39,
		amt: 20,
	},
	{
		date: '9.9',
		'20대': 18,
		'30대': 48,
		amt: 21,
	},
	{
		date: '9.14',
		'20대': 23,
		'30대': 38,
		amt: 25,
	},
];

const UserInfoBox = styled.div`
	width: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 10px;
	background-color: white;
`;

const StoreInfo = () => {
	const userInfo = useSelector((state: RootState) => state.user);
	const noUser = () => {
		alert('로그인 정보가 존재하지 않습니다.');
		window.location.href = '/owner';
	};
	console.log(userInfo);
	useEffect(() => {
		!localStorage.getItem('access_token') && noUser();
	}, []);
	return (
		<Container>
			<FlexBox dir="row">
				<div>
					매장 정보
					{localStorage.getItem('access_token') && (
						<div>
							<button onClick={logout}>로그아웃</button>
						</div>
					)}
				</div>
			</FlexBox>
			<UserInfoBox>
				<div>닉네임 : {userInfo.nickName}</div>
				<div>이름 : {userInfo.userName}</div>
				<div>매장아이디 : {userInfo.storeId}</div>
			</UserInfoBox>

			<CardContainer width={800} height={300}>
				<LineChart width={750} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="date" />
					<YAxis type="number" domain={[0, 80]} />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="20대" stroke="#8884d8" />
					<Line type="monotone" dataKey="30대" stroke="#82ca9d" />
				</LineChart>
			</CardContainer>
		</Container>
	);
};

export default StoreInfo;
