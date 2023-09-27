import Button from '../../components/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { BasketPayBtnContainer } from '../style/basket';
interface ButtonProps {
	label: string;
	url: string;
	basketCheck?: boolean;
}
function BasketPayBtn({ label, url, basketCheck }: ButtonProps) {
	const basketTotal = useSelector((state: RootState) => state.basket.totalPrice);
	const navigate = useNavigate();
	console.log(basketTotal);
	return (
		<BasketPayBtnContainer onClick={() => (basketCheck ? '' : navigate(url))}>
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
