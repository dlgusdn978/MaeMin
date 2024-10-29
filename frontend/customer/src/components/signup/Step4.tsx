import React from 'react';
import Button from '../../components/Button';
import styled from 'styled-components';

const Font = styled.div`
	font-size: 20px;
	margin-bottom: 20px;
	margin-left: 20px;
	margin-top: 20px;
	font-weight: 700;
`;
const Space = styled.div`
	width: 100%;
	height: 80px;
`;
const Container = styled.div`
	display: flex;
	align-items: center;
	margin: 20px 10px;
`;
const SelectContainer = styled.div`
	margin: 0px;
`;
const SelectForm = styled.select`
	width: 200px;
	height: 40px;
	font-size: 16px;
	border: 1px solid #ccc;
	border-radius: 3px;
	padding: 5px;
	background-color: white;
	&:focus {
		outline: none;
		border-color: rgba(255, 182, 73, 1);
	}
`;
const SelectOption = styled.option`
	font-size: 12px;
`;
interface Step4Props {
	gender: string;
	handleGenderSelect: (gender: string) => void;
	selectedAgeGroup: number | null;
	toggleDrawer: (e: React.SyntheticEvent) => void;
	handleAgeGroupSelect: (ageGroup: number) => void;
	handleSubmit: (e: React.SyntheticEvent) => void;
	drawerOpen: boolean;
}

const Step4 = ({
	gender,
	handleGenderSelect,
	selectedAgeGroup,
	toggleDrawer,
	handleAgeGroupSelect,
	handleSubmit,
	drawerOpen,
}: Step4Props): JSX.Element => {
	console.log(drawerOpen);
	console.log(toggleDrawer);
	return (
		<div>
			<div>
				<Space></Space>
				<Font>성별과 나이를</Font>
				<Font>선택해주세요</Font>
				<Button
					label="남자"
					fontSize="16px"
					width={160}
					height={40}
					margin="10px"
					backgroundColor={gender === 'male' ? 'rgba(255, 182, 73, 1)' : 'rgba(255, 182, 73, 0.5)'}
					textColor="white"
					borderRadius="3px"
					borderColor="rgb(240, 240, 240)"
					// onClick={() => handleGenderSelect('male')}
					onClick={(e: React.SyntheticEvent) => {
						e.preventDefault();
						handleGenderSelect('male');
					}}
				/>
				<Button
					label="여자"
					fontSize="16px"
					width={160}
					height={40}
					margin="10px"
					backgroundColor={gender === 'female' ? 'rgba(255, 182, 73, 1)' : 'rgba(255, 182, 73, 0.5)'}
					textColor="white"
					borderRadius="3px"
					borderColor="rgb(240, 240, 240)"
					// onClick={() => handleGenderSelect('female')}
					onClick={(e: React.SyntheticEvent) => {
						e.preventDefault();
						handleGenderSelect('female');
					}}
				/>
			</div>
			<div>
				<Container>
					<SelectContainer>
						<SelectForm
							id={'ageGroup'}
							value={'ageGroup'}
							onChange={(e) => handleAgeGroupSelect(Number(e.target.value.slice(0, -1)))}
						>
							<SelectOption value="">선택하세요</SelectOption>
							<SelectOption value="10대">10대</SelectOption>
							<SelectOption value="20대">20대</SelectOption>
							<SelectOption value="30대">30대</SelectOption>
							<SelectOption value="40대">40대</SelectOption>
							<SelectOption value="50대">50대</SelectOption>
							<SelectOption value="60대 이상">60대 이상</SelectOption>
						</SelectForm>
					</SelectContainer>
					{selectedAgeGroup && <span style={{ marginLeft: '40px' }}>{selectedAgeGroup}대</span>}
				</Container>
				<Button
					label="회원가입"
					onClick={handleSubmit}
					backgroundColor="rgba(255, 182, 73, 1)"
					fontSize="16px"
					margin="10px"
					textColor="white"
					borderRadius="3px"
					borderColor="rgb(240, 240, 240)"
					width={344}
					height={64}
					margintop="20px"
				/>
			</div>
		</div>
	);
};

export default Step4;
