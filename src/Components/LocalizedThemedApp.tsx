import React, {FC, useEffect, useState, useRef} from 'react';
import {Task} from 'redux-saga';
import {useDispatch} from 'react-redux';

import RootSaga from 'src/Redux/RootSaga';
import startRootSaga from 'src/Redux/startRootSaga';
import sagaMiddleware from 'src/Middleware/sagaMiddleware';
import RouterContainer from 'src/Routes/RouterContainer';

const LocalizedThemedApp: FC = () => {
	const dispatch = useDispatch();

	const sagaRunner = useRef<Task>();
	const [isClientReady, setIsClientReady] = useState(false);

	useEffect(() => {
		sagaRunner.current = startRootSaga(sagaMiddleware, RootSaga);
		setIsClientReady(true);
	}, [dispatch]);

	return isClientReady ? (
			<RouterContainer />
	) : (
		null
	);
};

export default LocalizedThemedApp;
