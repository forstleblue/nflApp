import { fork } from 'redux-saga/effects';

import { watchShowMessageRequest } from './messages';

export default function* rootSaga() {
  yield [fork(watchShowMessageRequest)];
}
