import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import {RiDeleteBin5Line} from 'react-icons/ri';
import './card.css';

const Card = (props) => {
	return (
		<Draggable draggableId={`item-${props.category}-${props.index}`} index={props.index}>
			{(provided) => (
				<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
					<div className='card'>
						{props.message}
						<RiDeleteBin5Line
							className='deleteCard'
							onClick={() => {
								props.deleteCard(props.index);
							}}
						/>
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default Card;
