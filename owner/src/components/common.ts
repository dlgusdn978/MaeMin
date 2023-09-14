import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const FlexBox = styled.div<directionType>`
	display: flex;
	flex-direction: ${(props) => (props.dir === 'row' ? 'row' : 'column')};
`;

export const HoverPointerBox = styled.div<HoverProps>`
	cursor: pointer;
	width: ${({ width }) => (width ? `${width}px` : '20px')};
`;
