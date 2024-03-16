import * as ccuid from 'cuid';
import _ from 'lodash';

import { ClientOnlyActions } from 'src/Actions/ActionCreator';
import EnumStore from 'src/BusinessLogic/EnumStore';

enum EnumClientActions {
	SEND_MESSAGE = 'SEND_MESSAGE',
	RESET_STORE = 'RESET_STORE',
}

class MessagesClientOnlyActions extends ClientOnlyActions<EnumStore.MESSAGES> {
	readonly scope = EnumStore.MESSAGES;

	sendMessage = this.createAction(EnumClientActions.SEND_MESSAGE, (payload: string) => ({
		payload
	}));

	resetStore = this.createAction(EnumClientActions.RESET_STORE)
}

export const messagesClientOnlyActions = new MessagesClientOnlyActions();
