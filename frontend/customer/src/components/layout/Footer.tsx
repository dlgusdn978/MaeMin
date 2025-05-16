import styled from 'styled-components';
import IconBox from '../IconBox';
import { useState } from 'react';
import { ReactComponent as CategoryIcon } from '../../assets/imgs/categoryfoot.svg';
import { ReactComponent as HomeIcon } from '../../assets/imgs/home.svg';
import { ReactComponent as LogIcon } from '../../assets/imgs/log.svg';
import { ReactComponent as MyIcon } from '../../assets/imgs/mypage.svg';
import { useNavigate } from 'react-router';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store/store';

const FooterContainer = styled.footer`
	/* position: fixed; */
	height: 80px;
	min-width: 390px;
	margin-top: auto;
	background-color: white;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	z-index: 999;
	@media (max-width: 768px) {
		position: relative;
		bottom: auto;
		/* 다른 모바일 스타일 속성 */
	}
`;

// const footerList = ['home', 'trend', 'log', 'myPage'];

const Footer = () => {
	// const userName = useSelector((state: RootState) => state.user.userName);
	const navigate = useNavigate();
	const [focusdIcon, setFocusedIcon] = useState(0);
	const moveTo = (page: string) => {
		navigate(page);
	};

	return (
		<FooterContainer>
			<div
				onClick={() => {
					moveTo('home');
					setFocusedIcon(0);
				}}
			>
				<IconBox icon={(props) => <HomeIcon {...props} />} focus={focusdIcon == 0 ? 1 : 0} />
			</div>
			<div
				onClick={() => {
					moveTo('trend');
					setFocusedIcon(1);
				}}
			>
				<IconBox icon={(props) => <CategoryIcon {...props} />} iconSize={35} focus={focusdIcon == 1 ? 1 : 0} />
			</div>
			<div
				onClick={() => {
					moveTo('log');
					setFocusedIcon(2);
				}}
			>
				<IconBox icon={(props) => <LogIcon {...props} />} focus={focusdIcon == 2 ? 1 : 0} />
			</div>
			{/* <div
				onClick={() => {
					userName ? moveTo('mypage') : moveTo('login');
				}}
			> */}
			<div
				onClick={() => {
					moveTo('mypage');
					setFocusedIcon(3);
				}}
			>
				<IconBox icon={(props) => <MyIcon {...props} />} focus={focusdIcon == 3 ? 1 : 0} />
			</div>
		</FooterContainer>
	);
};

export default Footer;
