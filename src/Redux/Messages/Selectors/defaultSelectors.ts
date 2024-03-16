import _ from 'lodash';

import IRootState from 'src/Redux/IRootState';
import EnumStore from 'src/BusinessLogic/EnumStore';
import { messagesAdapter } from 'src/Redux/Messages/entityAdapter';
import { TDefaultSelectors } from 'src/Redux/TDefaultSelectors';
import IMessage from 'src/Redux/Messages/Model';
import { getMessageVMCached } from 'src/Redux/Messages/getMessageVMCached';
import { createSelector } from 'src/UIKit/Redux';

const {selectIds, selectAll, selectTotal, selectById} = messagesAdapter.getSelectors<IRootState>(
	(state) => state[EnumStore.MESSAGES],
) as TDefaultSelectors<IMessage, string>;

export const selectMessageIds = selectIds;
export const selectTotalMessages = selectTotal;

export const selectMessageVMById = createSelector(
	[
		selectById
	],
	(
		message
	) =>
		message
			? getMessageVMCached(
					message,
			  )
			: undefined,
);

export const selectMessageVMs = createSelector(
	[
		selectAll,
	],
	(
		messages,
	) =>
		_.chain(messages)
			.map((message) =>
				getMessageVMCached(
					message,
				),
			)
			.compact()
			.value(),
);
