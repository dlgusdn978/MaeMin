import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { ReactComponent as LeftArrow } from '../assets/imgs/leftArrow.svg';
import { ReactComponent as LocationIcon } from '../assets/imgs/location.svg';
import { HoverPointerBox } from '../components/layout/common';
import {
	HistoryBox,
	HistoryItem,
	HistoryText,
	SearchContainer,
	SearchHistoryBox,
	SearchIconBox,
	SearchingBox,
} from '../components/style/search';
import Input from '../components/Input';
import { ReactComponent as SearchIcon } from '../assets/imgs/search.svg';
import Button from '../components/Button';
import { useNavigate } from 'react-router';

interface hisInterface {
	id: number;
	text: string;
}

const dummyHistory: hisInterface[] = [
	// 시 + 구 = 저장한 위치(구)정보 리스트 <- 백에서 받아올 데이터
	{
		id: 1,
		text: '광주광역시 광산구',
	},
	{
		id: 2,
		text: '서울특별시 노원구',
	},
	{
		id: 3,
		text: '광주광역시 북구',
	},
	{
		id: 4,
		text: '서울특별시 강남구',
	},
];

const SearchHistory = () => {
	const [history, setHistory] = useState<hisInterface[]>(dummyHistory);
	const [val, setVal] = useState('');
	const navigate = useNavigate();

	// 브라우저가 모두 렌더링된 상태에서 해당 함수를 실행
	// -> db에서 내가 저장한 검색어 ? 위치 ? 저장 & 최근검색어 localStorage로 사용
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const result = localStorage.getItem('history') || '[]';
			setHistory(JSON.parse(result));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('history', JSON.stringify(history));
	}, [history]);

	// 검색어 추가
	const handleAddKeyword = (text: string) => {
		const newKeyword = {
			id: Date.now(),
			text: text,
		};
		setHistory([newKeyword, ...history]);
	};

	// 단일 검색어 삭제
	const handleRemoveKeyword = (id: number) => {
		const nextKeyword = history.filter((history) => {
			return history.id != id;
		});
		setHistory(nextKeyword);
	};

	//검색어 전체 삭제
	const handleClearKeywords = () => {
		setHistory([]);
	};

	const inputRef = useRef<HTMLInputElement>(null);
	console.log(inputRef);
	useEffect(() => {
		inputRef.current?.focus();
	}, []);
	useLayoutEffect(() => {
		if (inputRef.current !== null) inputRef.current.focus();
	});

	return (
		<SearchContainer>
			<SearchHistoryBox>
				<HoverPointerBox
					onClick={() => {
						navigate(-1);
					}}
				>
					<LeftArrow />
				</HoverPointerBox>

				<SearchingBox>
					<Input
						ref={inputRef}
						value={val}
						onChange={setVal}
						height={40}
						width={305}
						border="none"
						borderRadius="10px"
						paddingLeft="10px"
						placeholder="위치 검색"
					/>
					<SearchIconBox
						onClick={() => {
							handleAddKeyword(val);
						}}
					>
						<SearchIcon />
					</SearchIconBox>
				</SearchingBox>
			</SearchHistoryBox>
			<div>
				<h2>최근 검색어</h2>
				{history.length ? (
					<Button
						label="전체삭제"
						fontSize="10px"
						width={57}
						height={26}
						onClick={() => {
							handleClearKeywords();
						}}
					/>
				) : null}
			</div>
			<HistoryBox>
				{history.length ? (
					history.map((item, i) => {
						return (
							<HistoryItem key={i}>
								<LocationIcon />
								<HistoryText>{item.text}</HistoryText>
								<Button
									label="x"
									onClick={() => handleRemoveKeyword(item.id)}
									backgroundColor="white"
								/>
							</HistoryItem>
						);
					})
				) : (
					<div>최근 검색어가 없습니다.</div>
				)}
			</HistoryBox>
		</SearchContainer>
	);
};

export default SearchHistory;
