import styled from 'styled-components';
import { theme } from '../../assets/styles/theme';

export const OrderListContainer = styled.div`
	display: flex;
	justify-content: space-around;
	overflow-x: auto;
	width: 100%;
	height: 100%;
	> .column {
		margin: 0.5rem;
		width: calc(100vw - 4rem);

		@media (min-width: '768px') {
			width: calc(100% - 1rem);
		}
	}
`;

export const OrderListBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	height: 500px;
	width: 300px;
	overflow: scroll;
	background-color: ${theme.color.main};
`;

export const OrderBoxTitle = styled.span`
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 10px;
`;

export const NoOrderText = styled.p`
	margin-top: 15px;
`;

export const AlertBox = styled.div`
	width: 40px;
	height: 20px;
	background-color: #ff0808;
	position: absolute;
	right: 3px;
	border-radius: 100%;
	top: 0px;
	display: flex;
	justify-content: center;
	color: rgba(255, 255, 255, 1);
`;
