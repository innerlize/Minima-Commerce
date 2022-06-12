import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import NavBar from '../components/NavBarComponents/NavBar/NavBar.js';
import NavBarProducts from '../components/NavBarComponents/NavBarProducts/NavBarProducts.js';
import ItemListContainer from '../components/ItemsComponents/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from '../components/ItemsComponents/ItemDetailContainer/ItemDetailContainer.js';
import CartView from '../components/ItemsComponents/ItemCartView/CartView.js';
import NotFound from '../components/PageNotFound/NotFound.js';
import './Routes.css';

const Routes = () => {
	return (
		<BrowserRouter>
    		<NavBar />
    		<NavBarProducts />
    		<Switch>
    			<Route path='/Minima-Commerce' element={<ItemListContainer />} />
    			<Route path='/Minima-Commerce/category/:categoryId' element={<ItemListContainer />} />
    			<Route path='/Minima-Commerce/item/:itemId' element={<ItemDetailContainer />} />
    			<Route path='/Minima-Commerce/cart' element={<CartView />} />
    			<Route path='*' element={<NotFound />} />
    		</Switch>
		</BrowserRouter>
	)
};

export default Routes;