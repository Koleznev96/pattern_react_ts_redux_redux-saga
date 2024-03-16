import {createEntityAdapter} from '@reduxjs/toolkit';
import _ from 'lodash';

import IMessage from 'src/Redux/Messages/Model';

export const sortByTime = (
	{time: messageTime1 = ''},
	{time: messageTime2 = ''},
) => {
	const time1 = parseInt(messageTime1, 10);
	const time2 = parseInt(messageTime2, 10);

	if (time1 !== time2) {
		return time1 > time2 ? 1 : -1;
	}

	return 0;
};

export const messagesAdapter = createEntityAdapter<IMessage>({
	selectId: (message: IMessage) => _.toString(message.messageId),
	sortComparer: sortByTime,
});
