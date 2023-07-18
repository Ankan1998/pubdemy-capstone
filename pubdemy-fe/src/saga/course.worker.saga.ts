import axios, { AxiosResponse } from "axios";
import { CourseModel } from "../models/course.model";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { setRandomCourses } from "../redux/reducers/course.reducer";

function GetRandomCourses(token: string) {
    return axios.post<AxiosResponse<CourseModel[]>>(
      "http://localhost:5555/course/random",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }

  function GetSearchCourses(token: string) {
    return axios.post<AxiosResponse<CourseModel[]>>(
      "http://localhost:5555/course/search",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  }
  

  export function* fetchRandomCourses(action: PayloadAction<string>) {
    try {
      const response: AxiosResponse<CourseModel[]> = yield call(
        GetRandomCourses,
        action.payload,
      ); 
  
      if (response.status === 200) {
        yield put(setRandomCourses(response.data));
      }
    } catch (error) {
      console.log(error); // dipatch an action with error
    }
  }

  export function* fetchSearchCourses(action: PayloadAction<string>) {
    try {
      const response: AxiosResponse<CourseModel[]> = yield call(
        GetSearchCourses,
        action.payload,
      ); 
  
      if (response.status === 200) {
        yield put(setRandomCourses(response.data));
      }
    } catch (error) {
      console.log(error); // dipatch an action with error
    }
  }
  
  // export function* fetchProductsWithRetry() {
  //   try {
  //     let duration = 1000;
  //     let response: AxiosResponse<ProductModel[]> = yield retry(
  //       3,
  //       duration * 10,
  //       GetAllProducts,
  //     );
  //     yield put(setAllProducts(response.data));
  //   } catch (error) {}
  // }
  