import Button from '../../components/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { BasketPayBtnContainer } from '../style/basket';
interface ButtonProps {
	label: string;
	basketCheck?: boolean;
	onClick: () => void;
}
function BasketPayBtn({ label, basketCheck }: ButtonProps) {
	const basketTotal = useSelector((state: RootState) => state.basket.totalPrice);
	console.log(basketTotal);
	return (
		<BasketPayBtnContainer>
			<Button
				label={label}
				width={'100%'}
				margin={'0px auto'}
				backgroundColor={basketCheck ? 'rgba(0, 0, 0, 0.1)' : '#FFB649'}
				padding={'10px'}
				borderRadius={'5px'}
				textColor={'white'}
				fontWeight={'bold'}
				fontSize={'18px'}
			></Button>
		</BasketPayBtnContainer>
	);
}
export default BasketPayBtn;
