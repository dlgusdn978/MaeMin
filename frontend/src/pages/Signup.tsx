import React, { useState, useEffect } from 'react';
import InputComponent from '../components/Input';
import Button from '../components/Button';

const Signup = () => {
	const [id, setId] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [verificationCode, setVerificationCode] = useState<string>('');
	const [nickname, setNickname] = useState<string>('');
	const [gender, setGender] = useState<string>('');
	const [isPasswordMismatch, setIsPasswordMismatch] = useState<boolean>(false);
	const [selectedAgeGroup, setSelectedAgeGroup] = useState<string | null>(null);
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const [timer, setTimer] = useState<number | null>(null);
	const [countdown, setCountdown] = useState<number>(180);

	const handleGenderSelect = (selectedGender: string) => {
		setGender(selectedGender);
	};
	useEffect(() => {
		let timerId: NodeJS.Timeout;
		if (timer !== null) {
			timerId = setInterval(() => {
				setCountdown((prevCountdown) => {
					if (prevCountdown === 0) {
						clearInterval(timerId);
						setTimer(null);
						return 180; // 초기값으로 설정
					}
					return prevCountdown - 1;
				});
			}, 1000);
		}
		return () => {
			clearInterval(timerId);
		};
	}, [timer]);

	const startTimer = () => {
		setTimer(Date.now());
	};

	const displayTime = () => {
		const minutes = Math.floor(countdown / 60);
		const seconds = countdown % 60;
		return `${minutes}분 ${seconds}초`;
	};

	useEffect(() => {
		if (password && confirmPassword) {
			setIsPasswordMismatch(password !== confirmPassword);
		} else {
			setIsPasswordMismatch(false);
		}
	}, [password, confirmPassword]);

	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};

	const handleAgeGroupSelect = (ageGroup: string) => {
		setSelectedAgeGroup(ageGroup);
		toggleDrawer();
	};
	// 아이디 중복검사
	const checkIdDuplicate = () => {
		// 임시로 랜덤한 방법으로 중복을 확인합니다.
		// 실제로는 서버에 요청을 보내서 중복을 확인해야 합니다.
		const isDuplicate = Math.random() > 0.5;

		if (isDuplicate) {
			alert('이미 사용 중인 아이디입니다.');
		} else {
			alert('사용 가능한 아이디입니다.');
		}
	};
	// 닉네임 중복검사
	const checkNicknameDuplicate = () => {
		// 임시로 랜덤한 방법으로 중복을 확인합니다.
		// 실제로는 서버에 요청을 보내서 중복을 확인해야 합니다.
		const isDuplicate = Math.random() > 0.5;

		if (isDuplicate) {
			alert('이미 사용 중인 닉네임입니다.');
		} else {
			alert('사용 가능한 닉네임입니다.');
		}
	};

	const handleSubmit = () => {
		if (isPasswordMismatch) {
			alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
			return;
		}

		// 회원가입 로직
		console.log({
			id,
			password,
			confirmPassword,
			phone,
			verificationCode,
			nickname,
			gender,
			selectedAgeGroup,
		});
	};

	return (
		<div style={{ paddingLeft: '15px' }}>
			<h1>회원가입</h1>
			<div>
				{/* 아이디 */}
				<InputComponent
					value={id}
					placeholder="ID"
					type="text"
					onChange={setId}
					width={270}
					height={40}
					borderRadius="100px"
					border="white"
					margin="10px"
				/>
				<Button label="중복검사" fontSize="10px" width={57} height={26} onClick={checkIdDuplicate} />
			</div>
			<div>
				{/* 비밀번호 */}
				<InputComponent
					value={password}
					placeholder="PW"
					type="password"
					onChange={setPassword}
					border={isPasswordMismatch ? '2px solid red' : '1px solid white'}
					width={270}
					height={40}
					borderRadius="100px"
					margin="10px"
				/>
			</div>
			<div>
				{/* 비밀번호 확인 */}
				<InputComponent
					value={confirmPassword}
					placeholder="PW 확인"
					type="password"
					onChange={setConfirmPassword}
					border={isPasswordMismatch ? '2px solid red' : '1px solid white'}
					width={270}
					height={40}
					borderRadius="100px"
					margin="10px"
				/>
			</div>
			{isPasswordMismatch && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
			<div>
				{/* 전화번호 */}
				<InputComponent
					value={phone}
					placeholder="Phone"
					type="tel"
					onChange={setPhone}
					width={270}
					height={40}
					borderRadius="100px"
					border="white"
					margin="10px"
				/>
				<Button label="인증번호 발송" fontSize="10px" width={81} height={26} onClick={startTimer} />
			</div>
			<div>
				{/* 인증번호 */}
				<InputComponent
					value={verificationCode}
					placeholder="인증번호"
					type="text"
					onChange={setVerificationCode}
					width={270}
					height={40}
					borderRadius="100px"
					border="white"
					margin="10px"
				/>
				<Button label="인증번호 확인" fontSize="10px" width={81} height={26} />
				{timer && <div>남은 시간: {displayTime()}</div>}
			</div>
			{/* 닉네임 */}
			<div>
				<InputComponent
					value={nickname}
					placeholder="닉네임"
					type="text"
					onChange={setNickname}
					width={270}
					height={40}
					borderRadius="100px"
					border="white"
					margin="10px"
				/>
				<Button label="중복검사" fontSize="10px" width={57} height={26} onClick={checkNicknameDuplicate} />
			</div>
			{/* 성별 */}
			<div>
				<Button
					label="남자"
					fontSize="16px"
					width={150}
					height={40}
					margin="10px"
					backgroundColor={gender === 'male' ? 'rgba(255, 182, 73, 1)' : 'grey'}
					textColor="white"
					borderRadius="100px"
					borderColor="rgb(240, 240, 240)"
					onClick={() => handleGenderSelect('male')}
				/>
				<Button
					label="여자"
					fontSize="16px"
					width={150}
					height={40}
					margin="10px"
					backgroundColor={gender === 'female' ? 'rgba(255, 182, 73, 1)' : 'grey'}
					textColor="white"
					borderRadius="100px"
					borderColor="rgb(240, 240, 240)"
					onClick={() => handleGenderSelect('female')}
				/>
			</div>

			{/* 나이 */}
			<div>
				<Button label="나이 선택" onClick={toggleDrawer} width={150} height={40} margin="10px" />
				{selectedAgeGroup && <span style={{ marginLeft: '40px' }}>{selectedAgeGroup}</span>}

				<div
					style={{
						display: drawerOpen ? 'block' : 'none',
						position: 'absolute',
						width: '200px',
						background: 'white',
						border: '1px solid black',
					}}
				>
					{['10대', '20대', '30대', '40대', '50대', '60대', '70대', '80대', '90대'].map((ageGroup) => (
						<div key={ageGroup} onClick={() => handleAgeGroupSelect(ageGroup)}>
							{ageGroup}
						</div>
					))}
				</div>
				<div>
					<Button
						label="회원가입"
						onClick={handleSubmit}
						backgroundColor="rgba(255, 182, 73, 1)"
						fontSize="16px"
						margin="10px"
						textColor="white"
						borderRadius="100px"
						borderColor="rgb(240, 240, 240)"
						width={344}
						height={64}
					/>
				</div>
			</div>
		</div>
	);
};

export default Signup;
