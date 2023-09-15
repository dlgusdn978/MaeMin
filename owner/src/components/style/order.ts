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
	background-color: ${theme.color.main};
`;

export const OrderBoxTitle = styled.span`
	font-size: 24px;
	font-weight: 600;
`;
