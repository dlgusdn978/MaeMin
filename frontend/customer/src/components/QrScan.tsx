/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';

// const constraints: MediaStreamConstraints = {
// 	video: true,
// 	audio: false,
// };

const QrCodeReader = () => {
	const [data, setData] = useState('No result');
	useEffect(() => setData('test'), []);
	return (
		<>
			<QrReader
				onResult={(result, error) => {
					if (result) {
						console.log(result);
						setData(result?.getText());
					}

					if (error) {
						console.info(error);
					}
				}}
				// constraints={constraints}
				// style={{ width: '100%' }}
			/>
			<p>{data}</p>
		</>
	);
};

export default QrCodeReader;
