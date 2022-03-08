import { combineReducers, configureStore } from '@reduxjs/toolkit';
import produtos from './produtos';
import carrinho from './carrinho';

const reducer = combineReducers({ produtos, carrinho });
const store = configureStore({ reducer });

export default store;
