import React, {useState} from 'react';
import {GoPlus} from 'react-icons/go';
import './cardI.css';

const CardI = (props) => {
	const [add, setAdd] = useState(false);
	const [message, setMessage] = useState('');

	const submitMessage = () => {
		if (message === '') return alert('La descripción esta vacía');

		if (message !== '') {
			const json = localStorage.getItem('lists');
			const list = JSON.parse(json);
			list[props.category].cards.push(message);
			props.updateList(list);
			setAdd(false);
			setMessage('');
		}
	};

	return (
		<div className='addCard'>
			{add === true ? (
				<>
					<textarea
						className='inputCard'
						placeholder='Descripción'
						rows='3'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<div className='buttonsCard'>
						<button onClick={submitMessage} className='buttonCard'>
							Agregar
						</button>
						<button onClick={() => setAdd(false)} className='buttonCard'>
							Cancelar
						</button>
					</div>
				</>
			) : (
				<button onClick={() => setAdd(!add)} className='buttonCard'>
					<GoPlus />
					Agregar tarea
				</button>
			)}
		</div>
	);
};

export default CardI;
