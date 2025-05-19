import Button from '../../components/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { BasketPayBtnContainer } from '../style/basket';
interface ButtonProps {
	label: string;
	basketCheck?: boolean;
	method?: number;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}
function BasketPayBtn({ label, onClick }: ButtonProps) {
	const basketTotal = useSelector((state: RootState) => state.basket.totalPrice);
	console.log(basketTotal);
	return (
		<BasketPayBtnContainer onClick={onClick}>
			<Button label={label} variant={'filled'}></Button>
		</BasketPayBtnContainer>
	);
}
export default BasketPayBtn;
