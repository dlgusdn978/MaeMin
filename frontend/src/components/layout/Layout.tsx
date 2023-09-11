import styled from 'styled-components';
import Footer from './Footer';

const Main = styled.main`
	min-height: calc(100vh - 100px);
`;

const Layout = (props: { children: React.ReactNode }) => {
	return (
		<div>
			<Main>{props.children}</Main>
			<Footer />
		</div>
	);
};

export default Layout;
