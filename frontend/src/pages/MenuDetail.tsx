import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import BackarrowIcon from '../assets/imgs/backarrow.svg';

const BackButton = styled.button`
	position: absolute;
	top: 0;
	left: 0;
	background-color: white;
	border: none;
	/* margin: 20px; */
	margin-top: 25px;
	margin-left: 10px;
`;
const MenuDetail = () => {
	const { menuId } = useParams<{ menuId: string }>();

	const navigate = useNavigate();

	const navigateToPreviousPage = () => {
		navigate(-1);
	};

	return (
		<div>
			<h1>해당 메뉴 상세페이지 메뉴id:{menuId}</h1>
			{/* 상세 정보를 여기에 표시 */}
			<BackButton onClick={navigateToPreviousPage}>
				<img src={BackarrowIcon} alt="Go back" />
			</BackButton>
		</div>
	);
};

export default MenuDetail;
