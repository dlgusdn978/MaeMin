import react from 'react';
import styled from 'styled-components';

const StyledInput = styled.input<InputProps>`
	width: ${({ width }) => (width ? width : '100%')};
	border-radius: 5px;
	background-color: rgba(0, 0, 0, 0.05);
	border: none;
	padding: 10px;
`;
const Input = ({ width }: InputProps) => {
	return <StyledInput width={width}></StyledInput>;
};
export default Input;
