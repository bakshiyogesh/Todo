import { createSlice } from "@reduxjs/toolkit";
const initialState={
    stockValue:[],
    itemName:[],
}
export const stockSlice=createSlice({
    name:'stocks',
    initialState,
    reducers:{
        addStocks:(state,action)=>{
            if(!state.itemName.includes(action.payload.name)){
                state.stockValue.push(action.payload);
                state.itemName.push(action.payload.name)
            }
            console.log("id same here",state.itemName.includes(action.payload.name));
    },
        removeStocks:(state,action)=>{
            const stockToFind=state.stockValue.findIndex((item)=>item.id===action.payload.id);
            // console.log(stockToFind,state.stockValue);
            state.stockValue.splice(stockToFind,1);
        }
    }
})
export  const {addStocks,removeStocks}=stockSlice.actions;
export const stocksReducer=stockSlice.reducer;