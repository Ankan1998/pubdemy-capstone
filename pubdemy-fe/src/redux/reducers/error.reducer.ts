import { createSlice } from "@reduxjs/toolkit";
import { ErrorModel } from "../../models/error.model";

let initialState: ErrorModel = {
    isError:false
};
export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setErrorx: (store) => {
      store.isError = true;
      return store;
    },
    unsetErrorx: (store) => {
        store.isError = false;
        return store;
      },
  },
});

export const { setErrorx,unsetErrorx } =
  errorSlice.actions;
export default errorSlice.reducer;