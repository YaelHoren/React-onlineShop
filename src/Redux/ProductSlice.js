 import { createSlice } from "@reduxjs/toolkit";
 import { fetchDataAsyncAction } from "./Thunk";
const ProductSlice=createSlice({
   name:"product",
   initialState:{
    ArrProducts:[],
    loading:false,
    error:false
   },
   reducers:{
    
   
   },
   extraReducers: (builder) => {
    builder
        .addCase(fetchDataAsyncAction.pending, (state) => {
            state.loading = true;
            state.ArrProducts = []; 
            state.error = false;
        })
        .addCase(fetchDataAsyncAction.fulfilled, (state, action) => {
            state.ArrProducts = action.payload;
           state.loading = false;
           state.error = false;
        })
        .addCase(fetchDataAsyncAction.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
}
})
export const{ShowProducts}=ProductSlice.actions;
export default ProductSlice.reducer;

