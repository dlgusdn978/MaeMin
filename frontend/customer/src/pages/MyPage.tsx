import React from 'react';
import { Container } from '../components/layout/common';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import {
	MyOrderHistory,
	UserInfoBox,
	UserInfoItem,
	UserPayItem,
	UserPayInfo,
	UserPayNotice,
	NoticeBox,
	NoticeItem,
} from '../components/style/mypage';

import styled from 'styled-components';
import userIcon from '../assets/imgs/userIcon.png';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
// import Button from '../components/Button';
const UserImgItem = styled.div`
	padding: 10px;
`;

// const LogoutBox = styled.div``;
const MyPage = () => {
	const userInfo = useSelector((state: RootState) => state.user);
	const navigate = useNavigate();

	const moveTo = (page: string) => {
		navigate(page);
	};

	return (
		<Container>
			<Navigation title={'마이페이지'} />
			<UserInfoBox>
				<UserImgItem>
					<img src={userIcon} />
				</UserImgItem>
				<UserInfoItem>
					<div>
						<span>{userInfo.nickName !== '' ? userInfo.nickName : '로그인하고 시작하기'}</span>
						{userInfo.nickName === '' ? <Button label={'>'} onClick={() => moveTo('/login')}></Button> : ''}
					</div>
					{/* <Button
						label={'로그아웃'}
						onClick={() => {
							logout().then((res) => console.log(res + ' ' + '성공'));
						}}
					></Button> */}
					<div>
						<div>리뷰관리</div>
						<div>주소관리</div>
					</div>
				</UserInfoItem>
			</UserInfoBox>
			<MyOrderHistory>
				<UserPayItem>
					<UserPayInfo>
						<div>매민 페이</div>
						<div>{userInfo.pay ? '사용 내역 확인하기' : '간편하게 등록하기 '}</div>
					</UserPayInfo>
					<UserPayNotice>머니로 결제할 때마다 포인트가 쌓여요!</UserPayNotice>
				</UserPayItem>
			</MyOrderHistory>
			<NoticeBox>
				<NoticeItem>고객센터</NoticeItem>
				<NoticeItem>자주 묻는 질문</NoticeItem>
				<NoticeItem>공지사항</NoticeItem>
				<NoticeItem>약관 및 정책</NoticeItem>
				<NoticeItem>현재 버전 : 1.0.0</NoticeItem>
			</NoticeBox>
			{/* <LogoutBox>
				<Button
					label={'로그아웃'}
					width={'300px'}
					padding={'20px'}
					margin={'20px 0'}
					borderRadius={'5px'}
					backgroundColor={'#ffb649'}
					textColor={'white'}
					fontWeight={'bold'}
					onClick={() => logout()}
				></Button>
			</LogoutBox> */}
		</Container>
	);
};

export default MyPage;
