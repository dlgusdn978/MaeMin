import React, { useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import TodoList from '../components/dnd/TodoList';
import { nanoid } from 'nanoid';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { HomeTitle } from '../components/text';
import { getOrderList } from '../api/order';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Order = () => {
	const [todos, setTodos] = useLocalStorage<OrderData[]>('todos', []);
	const [inProgressTodos, setInProgressTodos] = useLocalStorage<OrderData[]>('inprogress', []);
	const [completedTodos, setCompletedTodos] = useLocalStorage<OrderData[]>('completed', []);
	const storeId = useSelector((state: RootState) => state.user.storeId);

	const storeName = 'OO 매장';

	const dummyList = [
		{
			id: nanoid(),
			todo: '주문1',
			isDone: false,
		},
		{
			id: nanoid(),
			todo: '주문2',
			isDone: false,
		},
		{
			id: nanoid(),
			todo: '주문3',
			isDone: false,
		},
	];

	useEffect(() => {
		// if (dummyList) {
		// 	setTodos(dummyList);
		// 	// setTodos([...todos, { id: nanoid(), todo, isDone: false }]);
		// }
		// console.log(todos);
		console.log(dummyList);
		console.log(storeId);

		getOrderList(storeId!)
			.then((res) => {
				console.log(res.data);
				res.data.map((item: OrderData) => {
					item.id = nanoid();
					item.todo = item.requests;
					item.isDone = false;
				});
				setTodos(res.data);
				console.log(todos);
			})
			.catch((err) => console.log(err));
	}, []);

	const onDragEnd = (result: DropResult) => {
		const { source, destination } = result;
		if (!destination) return;
		if (source.droppableId === destination.droppableId && source.index === destination.index) return;
		let add: OrderData;
		const inbox = todos;
		const inprogress = inProgressTodos;
		const completed = completedTodos;

		if (source.droppableId === 'inbox-column') {
			add = inbox[source.index];
			inbox.splice(source.index, 1);
		} else if (source.droppableId === 'inprogress-column') {
			add = inprogress[source.index];
			inprogress.splice(source.index, 1);
		} else {
			add = completed[source.index];
			completed.splice(source.index, 1);
		}

		if (destination.droppableId === 'inbox-column') {
			inbox.splice(destination.index, 0, { ...add, isDone: false });
			console.log('api호출로 주문상태 변경하기 - 결제 완료(주문 대기)');
		} else if (destination.droppableId === 'inprogress-column') {
			inprogress.splice(destination.index, 0, { ...add, isDone: false });
			console.log('조리중');
		} else {
			completed.splice(destination.index, 0, { ...add, isDone: true });
			console.log('완료');
		}

		setTodos(inbox);
		setInProgressTodos(inprogress);
		setCompletedTodos(completed);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className="dnd-container">
				<HomeTitle>{storeName}</HomeTitle>
				<TodoList
					todos={todos}
					setTodos={setTodos}
					inProgressTodos={inProgressTodos}
					setInProgressTodos={setInProgressTodos}
					completedTodos={completedTodos}
					setCompletedTodos={setCompletedTodos}
				/>
			</div>
		</DragDropContext>
	);
};

export default Order;
