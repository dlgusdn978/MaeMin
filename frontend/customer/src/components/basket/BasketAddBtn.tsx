import Button from '../Button';
import { BasketAddContainer } from '../style/basket';

function BasketAddBtn() {
	return (
		<BasketAddContainer>
			<Button
				label={' ➕ 더 담으러 가기'}
				width={'100%'}
				margin={'20px 0'}
				padding={'10px'}
				borderRadius={'5px'}
			></Button>
		</BasketAddContainer>
	);
}
export default BasketAddBtn;
