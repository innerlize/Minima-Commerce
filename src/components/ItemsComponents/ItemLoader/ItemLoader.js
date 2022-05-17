import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const ItemLoader = () => {
	return <>
		<Spinner animation="border" role="status" variant="primary">
			<span className="visually-hidden">Loading...</span>
		</Spinner>
	</>
}

export default ItemLoader;