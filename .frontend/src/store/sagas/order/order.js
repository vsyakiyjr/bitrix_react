import { takeEvery, call, put } from "redux-saga/effects";
import {
  ORDER_SUCCESS,
  ORDER_LOAD,
  ORDER_ERROR,
  orderInfo
} from "../../actions";

import {getDealList} from '../../../services';

export function* watchDealList() {
  yield takeEvery(ORDER_LOAD, workerDealList);
}

function* workerDealList() {
  try {
    const data =  yield call(getDealList);
    //console.log(data)
    yield put({ type: ORDER_SUCCESS });
    yield put(orderInfo(data));
  } catch (e) {
    yield put({ type: ORDER_ERROR });
  }
}