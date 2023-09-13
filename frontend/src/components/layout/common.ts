import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
// height: ${(height) => (height ? height : '1000px')};
export const TallContainer = styled.div<TallProps>`
	height: ${(props) => (props.height ? props.height : '1000px')};
`;

export const HoverPointerBox = styled.div`
	cursor: pointer;
`;
