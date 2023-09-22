import Button from '../../components/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { BasketPayBtnContainer } from '../style/basket';
interface ButtonProps {
	label: string;
	url: string;
}
function BasketPayBtn({ label, url }: ButtonProps) {
	const basketTotal = useSelector((state: RootState) => state.basket.totalPrice);
	const navigate = useNavigate();
	console.log(basketTotal);
	return (
		<BasketPayBtnContainer onClick={() => navigate(url)}>
			<Button
				label={label}
				width={'100%'}
				margin={'0px auto'}
				backgroundColor={'#FFB649'}
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
