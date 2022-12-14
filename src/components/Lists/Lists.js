import React, {useState, useEffect} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import Cards from '../Cards/Cards';
import ListI from '../ListI/ListI';
import CardI from '../CardI/CardI';
import './lists.css';

const Lists = () => {
	const [lists, setLists] = useState([]);

	useEffect(() => {
		let json = localStorage.getItem('lists');
		setLists(json === null ? [] : JSON.parse(json));
		if (json === null) localStorage.setItem('lists', JSON.stringify([]));
	}, []);

	const updateList = (data) => {
		setLists(data);
		saveList(data);
	};

	const saveList = (data) => localStorage.setItem('lists', JSON.stringify(data));

	// const deleteList = (index) => {
	// 	let newList = lists.filter((ix) => ix !== index);

	// 	setLists(newList);
	// 	saveList(newList);
	// };

	const onDragEnd = (result) => {
		if (!result.destination) return;
		if (
			result.destination.droppableId === result.source.droppableId &&
			result.destination.index === result.source.index
		)
			return;
		if (result.source.droppableId.split('-')[0] !== result.destination.droppableId.split('-')[0]) return;

		const source = {
			category: result.source.droppableId.split('-')[1],
			index: result.source.index,
		};

		const destination = {
			category: result.destination.droppableId.split('-')[1],
			index: result.destination.index,
		};

		let newList = JSON.parse(localStorage.getItem('lists'));
		let sCards = newList[source.category].cards;
		let dCards = newList[destination.category].cards;
		let card = sCards[source.index];
		sCards.splice(source.index, 1);
		dCards.splice(destination.index, 0, card);
		updateList(newList);
	};

	return (
		<div className='lists'>
			<ListI updateList={updateList} />
			<DragDropContext onDragEnd={onDragEnd}>
				<div className='categories'>
					{lists.map((category, index) => {
						return (
							<div key={index} className='category'>
								<div className='title'>
									<div className='text'>{category.title}</div>
								</div>
								<Cards index={index} data={category.cards} updateList={updateList} />
								<CardI category={index} updateList={updateList} />
							</div>
						);
					})}
				</div>
			</DragDropContext>
		</div>
	);
};

export default Lists;
