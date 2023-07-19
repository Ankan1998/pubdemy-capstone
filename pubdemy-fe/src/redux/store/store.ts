import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddlware from "redux-saga";
import rootSaga from "../../saga/saga";
import courses from "../reducers/course.reducer";
import user from "../reducers/user.reducer";
import cart from "../reducers/cart.reducer";
import reduxError from "../reducers/error.reducer";

const sagaMiddleware = createSagaMiddlware();
const store = configureStore({
  reducer: {
    courses,
    cart,
    user,
    reduxError
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;