import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import Priority from '../Priority/Priority';
import './card.css';

const Card = (props) => {
	return (
		<Draggable draggableId={`item-${props.category}-${props.index}`} index={props.index}>
			{(provided) => (
				<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
					<div className='card'>
						{props.message}
						<div className='content-priority'>
							<Priority />
						</div>
						<i onClick={props.deleteCard} className='icon' aria-hidden='true' />
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default Card;
