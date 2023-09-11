import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`
    ${normalize}

    html,
    body {
        overflow: hidden;
    }

    * {
        box-sizing: border-box;
    }
    ${({ theme }) => css`
		html {
			height: 100%;
			width: 390px;
			margin: 0 auto;
			body {
				display: flex;
				flex-direction: column;
				height: 100%;
				margin: 0;

				#root {
					background: ${theme.colors.background}; // theme 안에 color 중에서 background 를 선택
					color: ${theme.colors.black};
					display: flex;
					font-family: sans-serif;
					height: 100%;
					justify-content: center;
					padding: 15px;
				}
			}
		}
	`}
`;

export default GlobalStyle;
