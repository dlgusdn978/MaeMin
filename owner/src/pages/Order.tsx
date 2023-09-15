import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';
import { FlexBox } from '../components/style/common';

interface DragItem {
	id: number;
	menu: string;
	menus: string[];
	dropId: string;
	isDone: boolean;
}

interface DragItemList {
	dragItems: DragItem[];
}

const Input = styled.input`
	padding: 10px;
	width: 200px;
	height: 40px;
`;

const SubmitButton = styled.button`
	width: 100%;
	height: 50px;
	padding: 10px;
	text-align: center;
`;

function Order() {
	const [orderReady, setOrderReady] = useState<DragItem[]>([]);
	const [cooking, setCooking] = useState<DragItem[]>([]);
	const [complete, setComlete] = useState<DragItem[]>([]);
	const [menu, setMenu] = useState('');

	const arr = ['ready-column', 'inprogress-column', 'new'];
	const [dragItem, setdragItem] = useState<DragItem>({
		id: 0,
		menu: '',
		menus: [],
		dropId: arr[0],
		isDone: false,
	});

	const [orderList, setorderList] = useState<DragItemList>({
		dragItems: [dragItem],
	});

	const getItemStyle = (isDragging: any, draggableStyle: any) => ({
		orderSelect: 'none',
		padding: 10,
		margin: '5 0',
		border: '1px solid #ccc',
		background: isDragging ? 'lightgreen' : 'red',
		...draggableStyle,
	});

	useEffect(() => {
		setorderList({
			dragItems: [...orderList.dragItems, dragItem],
		});

		console.log(orderList);
	}, [dragItem]);

	// const handleAdd = (e: React.FormEvent) => {
	// 	e.preventDefault();
	// 	if (todo) {
	// 	  setTodos([...todos, { id: nanoid(), todo, isDone: false, priority }]);
	// 	  setTodo("");
	// 	}
	//   };

	const [idCnt, setIdCnt] = useState(0);

	const createorder = (menu: string) => {
		if (!menu) {
			alert('메뉴써보셈');
			return;
		}
		const newCnt = idCnt + 1;
		setIdCnt(newCnt);
		setdragItem({ id: idCnt, menu, dropId: 'ready-column', menus: ['파스타', '스테이크'], isDone: false });
	};

	const OrderDatas = (dropId: string) => {
		return orderList?.dragItems.map((order, idx) => {
			if (order.dropId === dropId && order.menu)
				return (
					<Draggable draggableId={order.id.toString()} index={idx} key={order.id}>
						{(provided, snapshot) => (
							<div
								ref={provided.innerRef}
								{...provided.draggableProps}
								{...provided.dragHandleProps}
								style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
							>
								<span>{order.menus}</span>
								<span>{order.menu}</span>
							</div>
						)}
					</Draggable>
				);
		});
	};

	const onDragEnd = (result: DropResult) => {
		console.log(result);

		const { source, destination } = result;

		if (!destination) return; // 올바르지 않은 droppable에 놓음
		// 드래그가 발생한 위치와 드롭이 발생한 위치가 같을 경우 바로 return
		// if (source.droppableId === destination.droppableId && source.index === destination.index) return;

		// let add: DragItem;
		// const ready = orderReady;
		// const inprogress = cooking;
		// const completed = complete;

		// if (source.droppableId === 'ready-column') {
		// 	add = ready[source.index];
		// 	ready.splice(source.index, 1);
		// } else if (source.droppableId === 'inprogress-column') {
		// 	add = inprogress[source.index];
		// 	inprogress.splice(source.index, 1);
		// } else {
		// 	add = completed[source.index];
		// 	completed.splice(source.index, 1);
		// }

		// if (destination.droppableId === 'ready-column') {
		// 	ready.splice(destination.index, 0, { ...add, isDone: false });
		// } else if (destination.droppableId === 'inprogress-column') {
		// 	inprogress.splice(destination.index, 0, { ...add, isDone: false });
		// } else {
		// 	completed.splice(destination.index, 0, { ...add, isDone: true });
		// }

		// setOrderReady(ready);
		// setCooking(inprogress);
		// setComlete(completed);

		let items = [...orderList.dragItems];
		let index;
		if (source.droppableId !== destination.droppableId) {
			index = items.findIndex((v) => v.id === parseInt(result.draggableId));
			const findObj = items[index];
			console.log(findObj);
			findObj.dropId = destination.droppableId;
			items.splice(index, 1);
			items = [...items, findObj];
			setorderList({
				dragItems: items,
			});
		} else {
			if (source.index !== destination.index) {
				const selectItem = items[result.source.index];
				items.splice(result.source.index, 1);
				items.splice(destination.index, 0, selectItem);
				setorderList({
					dragItems: items,
				});
			}
		}
	};

	const getListStyle = (isDraggingOver: any) => ({
		background: isDraggingOver ? 'lightblue' : '#f0f0f0',
		padding: 10,
		width: 250,
	});

	return (
		<FlexBox dir="row">
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<Input onChange={(e) => setMenu(e.target.value)} placeholder="메뉴들" />

				<SubmitButton onClick={() => createorder(menu)}>메뉴 등록해보기</SubmitButton>
			</div>
			<FlexBox dir="column">
				<DragDropContext onDragEnd={(result) => onDragEnd(result)}>
					{arr.map((v) => {
						return (
							<>
								<Droppable droppableId={v} key={v}>
									{(provided, snapshot) => (
										<div
											{...provided.droppableProps}
											key={v}
											ref={provided.innerRef}
											style={getListStyle(snapshot.isDraggingOver)}
											className={v}
										>
											{OrderDatas(v)}
											{provided.placeholder}
										</div>
									)}
								</Droppable>
							</>
						);
					})}
				</DragDropContext>
			</FlexBox>
		</FlexBox>
	);
}

export default Order;
