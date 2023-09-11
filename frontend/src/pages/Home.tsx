import React from 'react';
import styled from 'styled-components';

type activeType = {
	active: boolean;
};

const CustomContainer = styled.div<activeType>`
	background: ${(props) => {
		return props.theme.color.main;
	}};

	color: ${(props) => {
		if (props.active) {
			return 'white';
		}
		return '#eee';
	}};
`;

const Home = () => {
	return (
		<div>
			Home페이지
			<CustomContainer active>
				<span>styled-components css test</span>
			</CustomContainer>
		</div>
	);
};

export default Home;
