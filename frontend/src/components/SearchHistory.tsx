import React, { useEffect, useState } from 'react';
import { ReactComponent as LeftArrow } from '../assets/imgs/leftArrow.svg';
import { closeSearch } from '../store/searchSlice';
import { useDispatch } from 'react-redux';

interface hisInterface {
	id: number;
	text: string;
}

const dummyHistory = ['동명동', '서명서', '광산구', '정읍시'];

const SearchHistory = () => {
	const [history, setHistory] = useState<hisInterface[]>([]);
	const dispatch = useDispatch();

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

	return (
		<div>
			<div
				onClick={() => {
					dispatch(closeSearch());
				}}
			>
				<LeftArrow />
			</div>
			<h2>최근 검색어</h2>
			{dummyHistory.length ? (
				<button type="button" onClick={handleClearKeywords}>
					전체 삭제
				</button>
			) : (
				<button />
			)}
			{dummyHistory.length ? (
				dummyHistory.map((word, i) => {
					return <div key={i}>{word}</div>;
				})
			) : (
				<div>최근 검색어가 없습니다.</div>
			)}
		</div>
	);
};

export default SearchHistory;
