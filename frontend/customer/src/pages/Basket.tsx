import React from 'react';
import Navigation from '../components/Navigation';
import BasketMenuInfo from '../components/basket/BasketMenuInfo';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import BasketTotalResult from '../components/basket/BasketTotalResult';
import BasketPayBtn from '../components/basket/BasketPayBtn';
import BasketAddBtn from '../components/basket/BasketAddBtn';
import { BasketContainer, BasketBox, BasketStoreInfoBox, BasketMenuListInfoBox } from '../components/style/basket';
function Basket() {
	// const dispatch = useDispatch();
	const menuList = useSelector((state: RootState) => state.basket.menuList);
	const basketCheck = menuList.length === 0;
	return (
		<BasketContainer>
			<Navigation title={'장바구니 '}></Navigation>
			<BasketBox>
				{basketCheck ? (
					<BasketStoreInfoBox basketCheck={basketCheck}>
						{'장바구니에 추가된 메뉴가 없어요'}
					</BasketStoreInfoBox>
				) : (
					<BasketStoreInfoBox basketCheck={basketCheck}>가게명</BasketStoreInfoBox>
				)}

				<BasketMenuListInfoBox>
					{menuList.map((item, index: number) => (
						<BasketMenuInfo
							key={index}
							index={item.index}
							menuId={item.menuId}
							menuName={item.menuName}
							menuPrice={item.menuPrice}
							menuCount={item.menuCount}
							menuImg={item.menuImg}
							menuPayerList={item.menuPayerList}
						></BasketMenuInfo>
					))}
				</BasketMenuListInfoBox>
				<BasketTotalResult></BasketTotalResult>
				<BasketAddBtn></BasketAddBtn>
				<BasketPayBtn label={'주문하기'} url={'/paySelect'}></BasketPayBtn>
			</BasketBox>
		</BasketContainer>
	);
}

export default Basket;
