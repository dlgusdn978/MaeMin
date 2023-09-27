import React from 'react';
import styled from 'styled-components';
import BackarrowIcon from '../assets/imgs/backarrow.svg';
import Sharebox from '../assets/imgs/sharebox.svg';
import { useNavigate } from 'react-router-dom';
const NavContainer = styled.div`
	padding: 2%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const NavTitleBox = styled.div`
	font-weight: bold;
`;
const NavIconBox = styled.div``;
const Navigation = ({ title }: NavigationProps) => {
	const navigate = useNavigate();
	return (
		<NavContainer>
			<NavIconBox
				onClick={() => {
					navigate(-1);
				}}
			>
				<img src={BackarrowIcon} />
			</NavIconBox>
			<NavTitleBox>{title}</NavTitleBox>
			<NavIconBox>
				<img src={Sharebox} />
			</NavIconBox>
		</NavContainer>
	);
};
export default Navigation;
