import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthModel } from "../../models/auth.model";

let initialState: AuthModel = {
    isUserAuthenticated: false,
    username: "",
    token: "",
    email:""
  };
  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setUserAuthenticated: (store, action: PayloadAction<AuthModel>) => {
        store.isUserAuthenticated = action.payload.isUserAuthenticated;
        store.username = action.payload.username;
        store.token = action.payload.token;
        store.email =action.payload.email;
        return store;
      },
      logOut: (store) => {
        store.isUserAuthenticated = false;
        store.username = "";
        store.token = "";
        store.email = "";
        return store;
      },
    },
  });
  
  export const { setUserAuthenticated,logOut } = authSlice.actions;
  export default authSlice.reducer;