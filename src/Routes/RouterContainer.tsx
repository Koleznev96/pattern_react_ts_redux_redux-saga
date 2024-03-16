import React, {FC, lazy, Suspense} from 'react';
import {Route, Routes, useLocation} from 'react-router';

import EnumRoutes from './EnumRoutes';

const Chat = lazy(() => import('./Pages/ChatPage'));
const NotFound = lazy(() => import('./Pages/NotFoundPage'));

const RouterContainer: FC = () => {
	const location = useLocation();
	const state = location.state;

	return (
		<Suspense fallback={undefined}>
			<Routes location={state?.backgroundLocation}>
				<Route path={EnumRoutes.HOME} element={<Chat />} />
				<Route element={<NotFound />} path="*" />
			</Routes>
		</Suspense>
	);
};

export default RouterContainer;
