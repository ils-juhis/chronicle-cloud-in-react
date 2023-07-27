import { all } from 'redux-saga/effects';
import countrySaga from './countrySaga';
import userSaga from './userSaga';

export default function* rootSaga() {
    return yield all([
        countrySaga(),
        userSaga()
    ]);
}