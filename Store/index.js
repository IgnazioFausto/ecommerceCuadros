import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from '../Features/categories';
import productsReducer from '../Features/products';

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
    } 
});

export default store;