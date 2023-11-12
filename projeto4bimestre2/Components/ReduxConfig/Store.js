import { configureStore } from "@reduxjs/toolkit";
import dietaReducer from './Reducers';

const store = configureStore({
    reducer: {
        //outros reducers
        dieta: dietaReducer,
    },
});

export default store;