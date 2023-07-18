import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthModel } from "../../models/auth.model";

let initialState: AuthModel = {
    isUserAuthenticated: false,
    username: "",
    token: "",
  };
  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setUserAuthenticated: (store, action: PayloadAction<AuthModel>) => {
        store.isUserAuthenticated = action.payload.isUserAuthenticated;
        store.username = action.payload.username;
        store.token = action.payload.token;
        return store;
      },
    },
  });
  
  export const { setUserAuthenticated } = authSlice.actions;
  export default authSlice.reducer;