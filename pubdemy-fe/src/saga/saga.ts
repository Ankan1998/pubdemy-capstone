import { call, put, takeLatest } from "redux-saga/effects";
import { SagaActions } from "./saga.actions";
import { fetchRandomCourses, fetchSearchCourses } from "./course.worker.saga";

export default function* rootSaga() {
    yield takeLatest(SagaActions.FETCH_RANDOM_COURSES_ASYNC, fetchRandomCourses);
    yield takeLatest(SagaActions.FETCH_SEARCH_COURSES_ASYNC, fetchSearchCourses);
    //   yield takeLatest(SagaActions.FETCH_PRODUCTS_ASYNC, fetchProductsWithRetry);
    // yield takeLatest(SagaActions.DELETE_A_PRODUCT, deleteProductFromServer);
    // yield takeLatest(SagaActions.ADD_NEW_PRODUCT, addNewProductToServer);
  }


