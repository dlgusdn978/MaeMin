import React from 'react';
import { Container, FlexBox } from '../components/style/common';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { CardContainer } from '../components/style/card';
import { logout } from '../api/user';

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

const StoreAnalysis = () => {
	return (
		<Container>
			<FlexBox dir="row">
				<div>
					매장 정보(분석 예정)
					{localStorage.getItem('access_token') && <button onClick={() => logout}>로그아웃</button>}
				</div>
			</FlexBox>
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

export default StoreAnalysis;
