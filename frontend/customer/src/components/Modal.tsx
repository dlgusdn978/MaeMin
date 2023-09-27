import React, { useEffect } from 'react';
import styled from 'styled-components';
import checkIcon from '../assets/imgs/checkIcon.svg';
const ModalContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	position: fixed;
`;
const ModalContentBox = styled.div``;

const Modal = () => {
	useEffect(() => {
		setTimeout(() => {
			return;
		}, 3000);
	}, []);
	return (
		<ModalContainer>
			<ModalContentBox>완료</ModalContentBox>
			<ModalContentBox>{checkIcon}</ModalContentBox>
			<ModalContentBox>완료되었습니다.</ModalContentBox>
		</ModalContainer>
	);
};
export default Modal;
