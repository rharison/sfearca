import { combineReducers, configureStore } from '@reduxjs/toolkit';
import produtos from './produtos';

const reducer = combineReducers({ produtos });
const store = configureStore({ reducer });

export default store;
