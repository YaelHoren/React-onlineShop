import { createSlice } from "@reduxjs/toolkit";
let isClicked=false;
const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        amount: 1,
        totalPrice:0,
        numOfProducts:0
    },
    reducers: {
   
        addToCart: (state, action) => {
            const productToAdd = state.cartList.find(p => p.id === action.payload.id);
            if(!productToAdd){
                state.cartList.push({ ...action.payload, amount: 1 }); 
                
            } else {
                productToAdd.amount++;
            }
            state.totalPrice += action.payload.price; 
            state.numOfProducts++;
        },

        deleteProduct: (state, action) => {
            const productToRemove = state.cartList.find(p => p.id === action.payload);
            if (productToRemove) {
                state.cartList = state.cartList.filter(p => p.id !== action.payload);
                state.totalPrice -= productToRemove.price * productToRemove.amount;
                state.numOfProducts-=productToRemove.amount;
            }
          
        },
     
        addAmount: (state, action) => {
            const product = state.cartList.find(p => p.id === action.payload.id);
            if (product) {
                product.amount++;
                state.totalPrice += action.payload.price;
                state.numOfProducts++;
            }
        },
     
        removeAmount: (state, action) => {
            const product = state.cartList.find(p => p.id === action.payload.id);
            if (product) {
                product.amount--;
                state.numOfProducts--;
                state.totalPrice -= action.payload.price;
                if (product.amount <= 0) {
                    state.cartList = state.cartList.filter(p => p.id !== action.payload.id);
                }
            }
        },
        clearCart: (state) => {
            state.cartList = [];
            state.amount = 0;
            state.totalPrice = 0;
            state.numOfProducts=0;
      
        },
        
        HomeDelivery:(state)=>{
            if(!isClicked){
                state.totalPrice+=20;
                isClicked=true;
            }
            else{ 
               state.totalPrice-=20;
               isClicked=false;
            }
          }
    }
  
}
)
export const { addToCart, deleteProduct, addAmount, removeAmount, clearCart,HomeDelivery } = CartSlice.actions;
export default CartSlice.reducer;

