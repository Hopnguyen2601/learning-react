import { fork, take, call, put } from 'redux-saga/effects';
import * as actionType from '../Shopping/shopping-types';
import productApi from '../../apis/productApi';
import {
  fetchProductSuccess,
  fetchProductFailed,
} from '../Shopping/shopping-actions';

function* whatchingFetchProducts() {
  while (true) {
    yield take(actionType.FETCH_PRODUCT_LIST);
    console.log('Watching fetch');
    // call apis products list
    const response = yield call(productApi.getAll); //Blocking: waiting
    const { status, data } = response;
    console.log('resp = ', data);
    if (status === 200) {
      yield put(fetchProductSuccess(data));
    } else {
      yield put(fetchProductFailed(data));
    }
  }
}

function* rootSaga() {
  yield fork(whatchingFetchProducts);
}

export default rootSaga;
