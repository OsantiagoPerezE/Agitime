import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import Card from '../Card/Card';
import './cards.css';

const Cards = (props) => {
	const deleteCard = (index) => {
		let json = localStorage.getItem('lists');
		let list = JSON.parse(json);
		let newCards = list[props.index].cards.filter((item) => item !== list[props.index].cards[index]);
		list[props.index].cards = newCards;
		props.updateList(list);
	};

	return (
		<Droppable droppableId={`list-${props.index}`} key={`list-${props.index}`}>
			{(provided) => (
				<div className='cards' ref={provided.innerRef} {...provided.droppableProps}>
					{props.data.map((card, index) => (
						<div className='containerCard' key={index}>
							<Card
								index={index}
								category={props.index}
								key={index}
								message={card}
								deleteCard={deleteCard}
							/>
						</div>
					))}
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	);
};

export default Cards;
