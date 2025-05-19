import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Button from '../Button';
import { BasketAddContainer } from '../style/basket';
import { useNavigate } from 'react-router-dom';

function BasketAddBtn() {
	const storeId = useSelector((state: RootState) => state.basket.storeId);
	const navigate = useNavigate();
	return (
		<BasketAddContainer>
			<Button
				label={' ➕ 더 담으러 가기'}
				onClick={() => {
					navigate(`/store-detail/${storeId}`);
				}}
				variant={'outlined'}
			></Button>
		</BasketAddContainer>
	);
}
export default BasketAddBtn;
