import React from 'react';

const dummyHistory = ['동명동', '서명서', '광산구', '정읍시'];

const SearchHistory = () => {
	return (
		<>
			{dummyHistory.map((word, i) => {
				<div key={i}>{word}</div>;
			})}
		</>
	);
};

export default SearchHistory;
