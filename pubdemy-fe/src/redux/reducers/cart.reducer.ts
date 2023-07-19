import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartModel } from "../../models/cart.model";
import { CourseModel } from "../../models/course.model";

let initialState: CartModel = {
    courses:[],
    totalActualPrice:0,
    totalDiscountedPrice:0,
    cartSize:0

  };
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (store, action: PayloadAction<CourseModel>) => {
        store.courses.push(action.payload);
        store.totalActualPrice = store.totalActualPrice + action.payload.price;
        store.totalDiscountedPrice = store.totalDiscountedPrice + action.payload.discountedPrice;
        store.cartSize = store.cartSize+1;
        return store;
      },
      
    deleteFromCart: (store, action: PayloadAction<number>) => {
        store.courses.forEach((course, index) => {
            if (course.id === action.payload) {
                store.totalActualPrice = store.totalActualPrice - course.price;
                store.totalDiscountedPrice = store.totalDiscountedPrice - course.discountedPrice;
                store.cartSize = store.cartSize-1;
                store.courses.splice(index, 1);
            }
          });
        
        return store;
    },
    emptyCart:(store)=>{
      store.cartSize = 0
      store.courses=[]
      store.totalActualPrice=0
      store.totalDiscountedPrice=0
      return store;
    }
  },
});

export const { addToCart,deleteFromCart,emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;