import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    html,
    body {
        overflow: hidden;
    }
	button {
        background: "#FFF";
        font-size: 16px;
        color: "#999";
    }
    * {
        box-sizing: border-box;
		-webkit-tap-highlight-color:transparent;
    }
    ${({ theme }) => css`
		html {
			height: 100%;
			margin: 0 auto;
			body {
				display: flex;
				flex-direction: column;
				height: 100%;
				margin: 0;
				touch-action: pan-y;
				#root {
					background: ${theme.colors.background}; // theme 안에 color 중에서 background 를 선택
					color: ${theme.colors.black};
					display: flex;
					flex-direction: column;
					font-family: sans-serif;
					height: 100%;
				}
			}
		}
		::-webkit-scrollbar {
			display: none;
		}

		select {
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
		}
		input {
			outline: none;
		}
		.dnd-container {
			height: 100%;
		}
	`}
`;

export default GlobalStyle;
