import * as CryptoJS from 'crypto-js';

const aesKey = '0t0r0e0n0d0f0o0o0d0f0i0g0h0t0e0r';
const encrypt = (text: string) => {
	// AES 암호화 코드
	const plainText = text;
	const key = CryptoJS.enc.Utf8.parse(aesKey);
	const iv = CryptoJS.enc.Hex.parse('0000000000000000');

	const encrypted = CryptoJS.AES.encrypt(plainText, key, {
		iv: iv,
		mode: CryptoJS.mode.CFB,
		padding: CryptoJS.pad.AnsiX923,
	});
	console.log(encrypt);
	console.log(encrypt.toString());

	// AES 복호화 코드
	const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
		iv: iv,
		mode: CryptoJS.mode.CFB,
		padding: CryptoJS.pad.AnsiX923,
	});
	console.log(decrypted.toString(CryptoJS.enc.Utf8));

	return encrypted;
};

export default encrypt;
