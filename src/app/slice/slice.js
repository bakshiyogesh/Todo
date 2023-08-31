import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
const initialState={
    stockValue:[],
    itemId:[],
}
export const stockSlice=createSlice({
    name:'stocks',
    initialState,
    reducers:{
        addStocks:(state,action)=>{
          state.stockValue.push(action.payload);
          state.itemId.push(action.payload.id);
    },
        removeStocks:(state,action)=>{
            const stockToFind=state.stockValue.findIndex((item)=>item.id===action.payload.id);
            console.log(stockToFind,state.stockValue);
            state.stockValue.splice(stockToFind,1);
        }
    }
})
export  const {addStocks,removeStocks}=stockSlice.actions;
export const stocksReducer=stockSlice.reducer;