import * as CryptoJS from 'crypto-js';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
// TODO : AES를 RSA 형식으로 변경
// APP 처음 실행 시 GET 요청. RETURN으로 INDEX, PUBLIC KEY
// PUBLIC KEY로 데이터 암호화 하고, 암호화 값과 INDEX를 서버에 전송.
const RSAKey = useSelector((state: RootState) => state.secure.publicKey);
const encrypt = (text: string) => {
	// AES 암호화 코드
	const plainText = text;
	const key = CryptoJS.enc.Utf8.parse(RSAKey);
	const iv = CryptoJS.enc.Hex.parse('0000000000000000');

	const encrypted = CryptoJS.AES.encrypt(plainText, key, {
		iv: iv,
		mode: CryptoJS.mode.CFB,
		padding: CryptoJS.pad.AnsiX923,
	});
	console.log(encrypted.toString());

	return encrypted.toString();
};

export default encrypt;
