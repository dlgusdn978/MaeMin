import React from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.div`
	margin: 3% 5%;
	padding: 2%;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;
const NavigationTitleBox = styled.div`
	font-weight: bold;
`;
const NavigationIconBox = styled.div`
	width: 20%;
`;
const Navigation = ({ title }: NavigationProps) => {
	return (
		<NavigationContainer>
			<NavigationIconBox>{'<-'}</NavigationIconBox>
			<NavigationTitleBox>{title}</NavigationTitleBox>
			<NavigationIconBox></NavigationIconBox>
		</NavigationContainer>
	);
};
export default Navigation;
