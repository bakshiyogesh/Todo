import { configureStore } from "@reduxjs/toolkit";
import { stocksReducer } from "../slice/slice";
const store=configureStore({
    reducer:{
        stocks:stocksReducer
    }
})
export default store;