import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../api";

export const fetchDataAsyncAction=createAsyncThunk("users/fetchData", async()=>{
    const data= await fetchProducts();
    return data;
}

);