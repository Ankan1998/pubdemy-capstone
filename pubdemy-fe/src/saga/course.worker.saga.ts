import axios, { AxiosResponse } from "axios";
import { CourseModel } from "../models/course.model";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { setRandomCourses, setSearchCourses } from "../redux/reducers/course.reducer";
import { CourseWithSearchModel } from "../models/courseWithSearch.model";
import { setErrorx, unsetErrorx } from "../redux/reducers/error.reducer";

function GetRandomCourses(token: string) {
    return axios.post<AxiosResponse<CourseModel[]>>(
      "http://localhost:5555/course/random",
      {},
      {
        headers: {
          Authorization: `${token}`,
        },
      },
    );
  }

  function GetSearchCourses(tokenQuery:string[]) {
    return axios.post<AxiosResponse<CourseModel[]>>(
      "http://localhost:5555/course/search",
      {}, 
      {
        params: {
          courseQuery: tokenQuery[1],
        },
        headers: {
          Authorization: `Bearer ${tokenQuery[0]}`,
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
  console.log(response.data)
      if (response.status === 200) {
        yield put(unsetErrorx());
        yield put(setRandomCourses(response.data));
      }
    } catch (error) {
      yield put(setErrorx());
      console.log(error); // dipatch an action with error
    }
  }

  export function* fetchSearchCourses(action: PayloadAction<string[]>) {
    try {
      const response: AxiosResponse<CourseModel[]> = yield call(
        GetSearchCourses,
        action.payload,
      ); 
  
      if (response.status === 200) {
        yield put(unsetErrorx());
        yield put(setSearchCourses(response.data));
      }
    } catch (error) {
      yield put(setErrorx());
      console.log(error); // dipatch an action with error
    }
  }
  