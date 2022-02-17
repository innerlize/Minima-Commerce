import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.js';
import NavBarProducts from '../NavBarProducts/NavBarProducts.js';
import ItemListContainer from '../ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.js';
import NotFound from '../NotFound/NotFound.js';
import './Routes.css';

const Routes = () => {
	return (
		<BrowserRouter>
    		<NavBar />
    		<NavBarProducts />
    		<Switch>
    			<Route path='/' element={<ItemListContainer />} />
    			<Route path='/category/:id' element={<ItemListContainer />} />
    			<Route path='/item' element={<ItemDetailContainer />} />
    			<Route path='*' element={<NotFound />} />
    		</Switch>
		</BrowserRouter>
	)
};

export default Routes;