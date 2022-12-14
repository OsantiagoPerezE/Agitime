import React from 'react';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Lists from './components/Lists/Lists';

const Apps = () => {
	return (
		<>
			<Header />
			<Container>
				<Lists />
			</Container>
		</>
	);
};

export default Apps;
