import styled from 'styled-components';
import IconBox from '../IconBox';
import { ReactComponent as TrendIcon } from '../../assets/imgs/trend.svg';
import { ReactComponent as HomeIcon } from '../../assets/imgs/home.svg';
import { ReactComponent as LogIcon } from '../../assets/imgs/log.svg';
import { ReactComponent as MyIcon } from '../../assets/imgs/mypage.svg';
import { useNavigate } from 'react-router';

const FooterContainer = styled.div`
	height: 100px;
	min-width: 390px;
	margin-top: auto;
	background-color: white;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	z-index: 999;
`;

const footerList = ['home', 'trend', 'log', 'myPage'];

const Footer = () => {
	const navigate = useNavigate();
	const moveTo = (page: string) => {
		navigate(page);
	};

	return (
		<FooterContainer>
			<div onClick={() => moveTo('home')}>
				<IconBox icon={(props) => <HomeIcon {...props} />} iconSize={25} />
			</div>
			<div onClick={() => moveTo('trend')}>
				<IconBox icon={(props) => <TrendIcon {...props} />} iconSize={25} />
			</div>
			<div onClick={() => moveTo('log')}>
				<IconBox icon={(props) => <LogIcon {...props} />} iconSize={25} />
			</div>
			<div onClick={() => moveTo('myPage')}>
				<IconBox icon={(props) => <MyIcon {...props} />} iconSize={25} />
			</div>
		</FooterContainer>
	);
};

export default Footer;
