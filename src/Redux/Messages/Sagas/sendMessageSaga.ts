import {put, select, call} from 'typed-redux-saga';
import { messagesClientOnlyActions } from '../Actions/messagesClientOnlyActions';

function* sendMessageSaga({
	payload,
}: ReturnType<typeof messagesClientOnlyActions.sendMessage>) {
	try {

	} catch (error) {
		console.error(error, {saga: 'sendMessageSaga'});
	}
}

export default sendMessageSaga;
