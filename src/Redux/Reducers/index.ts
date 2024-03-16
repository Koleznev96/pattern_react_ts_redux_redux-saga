import {combineReducers} from 'redux';
import {enableBatching} from 'redux-batched-actions';

import EnumStore from 'src/BusinessLogic/EnumStore';
import messagesSlice from 'src/Redux/Messages/slice';

const reducers = {
	[EnumStore.MESSAGES]: messagesSlice.reducer,
};

const rootReducer = enableBatching(combineReducers(reducers));

export default rootReducer;
