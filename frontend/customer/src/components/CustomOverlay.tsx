// styled-components 코드로 변경할 것.

// import { useNavigate } from 'react-router';
// const OverlayContainer = styled.div<{ length: number }>`
// 	background-color: white;
// 	width: ${(props) => (props.length * 20 > 100 ? `${props.length * 20}px` : '120px')};
// 	height: 40px;
// 	border-radius: 15px;
// 	position: absolute;
// 	left: -${(props) => (props.length * 20 > 100 ? `${props.length * 10}px` : '60px')};
// 	bottom: 50px;
// 	margin: 0;
// 	padding: 0;
// 	cursor: pointer;
// `;
// const OverlayTitleBox = styled.div`
// 	border: 3px solid #ffb649;
// 	border-radius: 15px;
// 	height: 40px;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	font-weight: bold;
// `;

// interface CustomOverlayProps {
// 	title: string;
// 	storeId: number;
// }
// const CustomOverlay: React.FC<CustomOverlayProps> = ({ title, storeId }) => {
// 	// 클릭 이벤트 핸들러
// 	const handleClick = useCallback(() => {
// 		console.log('Clicked on overlay:', title);
// 		// 클릭 이벤트 핸들러에서 원하는 작업 수행
// 	}, [title]);

// 	return (
// 		<OverlayContainer length={title.length} onClick={handleClick}>
// 			<OverlayTitleBox onClick={handleClick}>
// 				{title}
// 				{storeId}
// 			</OverlayTitleBox>
// 		</OverlayContainer>
// 	);
// };
// const CustomOverlayString = (title: string, storeId: number) => {
// 	const styledComponentString = ReactDOMServer.renderToStaticMarkup(
// 		<CustomOverlay title={title} storeId={storeId} />,
// 	);
// 	return styledComponentString;
// };
// export default CustomOverlayString;

export const OverlayContainer = `background-color: white;
		height: 40px;
		border-radius: 15px;
		position: absolute;
		bottom: 50px;
		margin: 0;
		padding: 0;
		cursor: pointer;`;
// export const OverlayContainer = (title: string) => {
// 	'background-color: white;' +
// 		`width: ${title.length * 20 > 100 ? `${title.length * 20}px` : '120px'};` +
// 		'height: 40px;' +
// 		'border-radius: 15px;' +
// 		'position: absolute;' +
// 		`left: -${title.length * 20 > 100 ? `${title.length * 10}px` : '60px'};` +
// 		'bottom: 50px;' +
// 		'margin: 0;' +
// 		'padding: 0;' +
// 		'cursor: pointer;';
// };
export const OverlayTitleBox = `border: 3px solid #ffb649;
    	border-radius: 15px;
    	height: 40px;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	font-weight: bold;`;
