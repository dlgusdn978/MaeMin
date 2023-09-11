import React, { useState, useEffect } from 'react';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';

const Signup: React.FC = () => {
	const [id, setId] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [verificationCode, setVerificationCode] = useState<string>('');
	const [nickname, setNickname] = useState<string>('');
	const [gender, setGender] = useState<string>(''); // 'male', 'female', or 'other'
	const [isPasswordMismatch, setIsPasswordMismatch] = useState<boolean>(false);
	const [selectedAgeGroup, setSelectedAgeGroup] = useState<string | null>(null);
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

	useEffect(() => {
		if (password && confirmPassword) {
			setIsPasswordMismatch(password !== confirmPassword);
		} else {
			setIsPasswordMismatch(false);
		}
	}, [password, confirmPassword]);

	const inputStyle = isPasswordMismatch ? { border: '2px solid red' } : {};

	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};

	const handleAgeGroupSelect = (ageGroup: string) => {
		setSelectedAgeGroup(ageGroup);
		toggleDrawer();
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
			// age,
		});
	};

	return (
		<div>
			<h1>회원가입</h1>
			<div>
				{/* 아이디 */}
				<InputComponent value={id} placeholder="ID" type="text" onChange={setId} />
			</div>
			<div>
				{/* 비밀번호 */}
				<InputComponent
					value={password}
					placeholder="PW"
					type="password"
					onChange={setPassword}
					style={inputStyle}
				/>
			</div>
			<div>
				{/* 비밀번호 확인 */}
				<InputComponent
					value={confirmPassword}
					placeholder="PW 확인"
					type="password"
					onChange={setConfirmPassword}
					style={inputStyle}
				/>
			</div>
			<div>
				{/* 전화번호 */}
				<InputComponent value={phone} placeholder="Phone" type="tel" onChange={setPhone} />
			</div>
			<div>
				{/* 인증번호 */}
				<InputComponent
					value={verificationCode}
					placeholder="인증번호"
					type="text"
					onChange={setVerificationCode}
				/>
			</div>
			<div>
				{/* 닉네임 */}
				<InputComponent value={nickname} placeholder="닉네임" type="text" onChange={setNickname} />
			</div>
			<div>
				{/* 성별 */}
				<select value={gender} onChange={(e) => setGender(e.target.value)}>
					<option value="">성별선택</option>
					<option value="male">남자</option>
					<option value="female">여자</option>
				</select>
			</div>
			{/* 나이 */}
			<div>
				<ButtonComponent label="나이 선택" onClick={toggleDrawer} />
				{selectedAgeGroup && <div>{selectedAgeGroup}</div>}
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
					<ButtonComponent label="Submit" onClick={handleSubmit} />
				</div>
			</div>
		</div>
	);
};

export default Signup;
