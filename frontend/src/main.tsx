import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import App from './App'
import store from "./store/store"
import './style.css'

ReactDOM.render(
	<Suspense fallback={<span>Loading...</span>}>
		<Provider store={store}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Provider>
	</Suspense>,
	document.getElementById('root'),
);
