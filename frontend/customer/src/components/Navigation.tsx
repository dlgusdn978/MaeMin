import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const NavContainer = styled.div`
	margin: 0 0 3% 0;
	padding: 2%;
	display: flex;
	justify-content: space-between;
	background-color: white;
`;
const NavTitleBox = styled.div`
	font-weight: bold;
`;
const NavIconBox = styled.div`
	width: 20%;
`;
const Navigation = ({ title }: NavigationProps) => {
	const navigate = useNavigate();
	return (
		<NavContainer>
			<NavIconBox
				onClick={() => {
					navigate(-1);
				}}
			>
				{'<-'}
			</NavIconBox>
			<NavTitleBox>{title}</NavTitleBox>
			<NavIconBox></NavIconBox>
		</NavContainer>
	);
};
export default Navigation;
