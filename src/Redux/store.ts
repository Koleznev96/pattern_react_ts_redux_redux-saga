import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import sagaMiddleware from 'src/Middleware/sagaMiddleware';
import rootReducer from 'src/Redux/Reducers';

export const store = configureStore({
	reducer: rootReducer,
	middleware: [sagaMiddleware],
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
