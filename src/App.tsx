import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import LocalizedThemedApp from 'src/Components/LocalizedThemedApp';
import {store} from 'src/Redux/store';

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<LocalizedThemedApp />
		</BrowserRouter>
	</Provider>
);

export default App;
