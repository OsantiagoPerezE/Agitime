import React, {useState} from 'react';
import {FcPlus} from 'react-icons/fc';
import './listI.css';

const ListI = (props) => {
	const [add, setAdd] = useState(false);
	const [title, setTitle] = useState('');

	function submitList() {
		if (title.length < 3) return alert('El título debe contener al menos 3 caracteres.');
		if (title !== '') {
			let json = localStorage.getItem('lists');
			let list = JSON.parse(json);
			list.push({
				title: title,
				cards: [],
			});
			localStorage.setItem('lists', JSON.stringify(list));
			setAdd(false);
			props.updateList(list);
			setTitle('');
		}
	}

	return (
		<div className='list'>
			{add === true ? (
				<div>
					<input
						className='inputList'
						type='text'
						placeholder='Título de Estado'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<button onClick={submitList} className='buttonList'>
						Agregar
					</button>
					<button onClick={() => setAdd(false)} className='buttonList'>
						Cancelar
					</button>
				</div>
			) : (
				<div onClick={() => setAdd(true)} className='add-more-list'>
					<FcPlus />
					Agregar Estado
				</div>
			)}
		</div>
	);
};

export default ListI;
