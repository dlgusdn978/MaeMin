import React, { useState, useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import TodoList from '../components/TodoList';
import { nanoid } from 'nanoid';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Order = () => {
	const [todo, setTodo] = useState<string>('');
	const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
	const [inProgressTodos, setInProgressTodos] = useLocalStorage<Todo[]>('inprogress', []);
	const [completedTodos, setCompletedTodos] = useLocalStorage<Todo[]>('completed', []);

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
		if (dummyList) {
			setTodos(dummyList);
			// setTodos([...todos, { id: nanoid(), todo, isDone: false }]);
			setTodo('');
		}
		console.log(todos);
	}, []);

	const onDragEnd = (result: DropResult) => {
		const { source, destination } = result;
		if (!destination) return;
		if (source.droppableId === destination.droppableId && source.index === destination.index) return;
		let add: Todo;
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
		} else if (destination.droppableId === 'inprogress-column') {
			inprogress.splice(destination.index, 0, { ...add, isDone: false });
		} else {
			completed.splice(destination.index, 0, { ...add, isDone: true });
		}

		setTodos(inbox);
		setInProgressTodos(inprogress);
		setCompletedTodos(completed);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className="dnd-container">
				<h1>{storeName}</h1>
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
