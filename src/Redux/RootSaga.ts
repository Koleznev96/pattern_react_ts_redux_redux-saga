import {fork} from 'typed-redux-saga';
import messagesSagaWatcher from './Messages/messagesSagaWatcher';

/**
 * @link https://words.thisishugo.com/how-to-pass-an-api-client-to-a-redux-saga-f35170356c53
 * @constructor
 */
export default function* RootSaga() {
	yield* fork(messagesSagaWatcher);
}
