import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import checkIcon from '../assets/imgs/checkIcon.svg';
const ModalContainer = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1000;
	width: 390px;
	height: 100%;
`;
const ModalContentBox = styled.div`
	background-color: white;
	width: 300px;
	border-radius: 10px;
	& > div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
const ModalImg = styled.img``;
const ModalImgItem = styled.div`
	margin: 30px 0;
`;

const ModalTitleItem = styled.div`
	padding: 20px;
	margin: 0 10px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
	font-weight: bold;
`;
const ModalContentItem = styled.div`
	margin-bottom: 50px;
`;
interface booleanProps {
	isOpen: boolean;
}
const Modal = ({ isOpen }: booleanProps) => {
	const [modalState, setModalState] = useState<boolean>(isOpen);
	useEffect(() => {
		setModalState(true);
		setTimeout(() => {
			setModalState(false);
			return;
		}, 3000);
	}, []);
	return (
		<>
			{modalState && (
				<ModalContainer>
					<ModalContentBox>
						<ModalTitleItem>결제 완료</ModalTitleItem>
						<ModalImgItem>
							<ModalImg src={checkIcon}></ModalImg>
						</ModalImgItem>
						<ModalContentItem>결제가 완료되었습니다.</ModalContentItem>
					</ModalContentBox>
				</ModalContainer>
			)}
		</>
	);
};
export default Modal;
