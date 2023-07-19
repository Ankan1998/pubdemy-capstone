import axios, { AxiosResponse } from "axios";
import { AuthModel } from "../models/auth.model";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { LoginModel } from "../models/login.model";
import { setUserAuthenticated } from "../redux/reducers/user.reducer";
import { setErrorx, unsetErrorx } from "../redux/reducers/error.reducer";

function Login(userdata:LoginModel) {
    return axios.post<AxiosResponse<AuthModel>>(
      "http://localhost:5555/user/login",
      {
            email:userdata.email,password:userdata.password
      },
    );
  }
  

  export function* requestLogin(action: PayloadAction<LoginModel>) {
    try {
      const response: AxiosResponse<any> = yield call(
        Login,
        action.payload,
      ); 
  
      if (response.status === 200) {
        const authUser:AuthModel = new AuthModel()
        authUser.username = response.data.user.name
        authUser.token = response.data.token
        authUser.email = action.payload.email
        authUser.isUserAuthenticated = true
        yield put(unsetErrorx());
        yield put(setUserAuthenticated(authUser));
      }
    } catch (error) {
      yield put(setErrorx());
    }
  }