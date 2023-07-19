import { takeLatest } from "redux-saga/effects";
import { SagaActions } from "./saga.actions";
import { fetchRandomCourses, fetchSearchCourses } from "./course.worker.saga";
import { requestLogin } from "./login.worker.saga";

export default function* rootSaga() {
    yield takeLatest(SagaActions.FETCH_RANDOM_COURSES_ASYNC, fetchRandomCourses);
    yield takeLatest(SagaActions.FETCH_SEARCH_COURSES_ASYNC, fetchSearchCourses);
    yield takeLatest(SagaActions.LOGIN_ASYNC, requestLogin);

  }


