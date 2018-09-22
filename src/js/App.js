/* @flow */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from 'store';

class App extends Component<null, null> {
    render() {
        return (
            <Provider store={store}>
				<div>
					<h1>Helloworld!</h1>
				</div>
            </Provider>
        );
    }
}

export default App;