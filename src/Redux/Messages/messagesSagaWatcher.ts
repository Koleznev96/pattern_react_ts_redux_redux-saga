import {takeEvery} from 'typed-redux-saga';

import { messagesClientOnlyActions } from './Actions/messagesClientOnlyActions';
import sendMessageSaga from './Sagas/sendMessageSaga';

export default function* messagesSagaWatcher() {
	yield* takeEvery(messagesClientOnlyActions.sendMessage.type, sendMessageSaga);
}
