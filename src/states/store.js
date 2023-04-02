import { configureStore } from "@reduxjs/toolkit";
import incdecReducer from './reducers/Reducers';

export default configureStore({
    reducer:{
        number: incdecReducer,
    }
})