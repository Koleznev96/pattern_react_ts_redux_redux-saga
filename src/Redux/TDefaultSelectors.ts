import {EntitySelectors} from '@reduxjs/toolkit/src/entities/models';

import IRootState from './IRootState';

export type TDefaultSelectors<E, I> = Omit<EntitySelectors<E, IRootState>, 'selectIds' | 'selectById'> & {
	selectIds: (state: IRootState) => string[];
	selectById: (state: IRootState, channelId: I) => E | undefined;
};
