import styled from 'styled-components';
import Footer from './Footer';
import { Container } from './common';

const Main = styled.main`
	min-height: calc(100vh - 100px);
	height: 100vh;
	position: relative;
`;

const Layout = (props: { children: React.ReactNode }) => {
	return (
		<Container>
			<Main>{props.children}</Main>
			<Footer />
		</Container>
	);
};

export default Layout;
