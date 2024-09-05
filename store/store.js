import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from '../counter/counterSlice';
import userSlice from '../user/userSlice';

const store = configureStore({
 reducer: {
    user : userSlice
 }
});
export default store