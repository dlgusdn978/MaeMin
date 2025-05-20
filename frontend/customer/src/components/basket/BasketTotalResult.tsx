import BasketTotalPrice from './BasketTotalPrice';
import { BasketTotalContainer, BasketTotalTitleBox } from '../style/basket';

type BasketTotalInfoProps = {
	price: number;
};
const BasketTotalResult = ({ price }: BasketTotalInfoProps) => {
	return (
		<BasketTotalContainer>
			<BasketTotalTitleBox>결제 금액</BasketTotalTitleBox>
			<BasketTotalPrice title={'총 결제 금액'} price={price}></BasketTotalPrice>
			<BasketTotalPrice title={'내 결제 예정 금액'} price={price}></BasketTotalPrice>
		</BasketTotalContainer>
	);
};
export default BasketTotalResult;
