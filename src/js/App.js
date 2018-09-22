/* @flow */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import RemindersApp from 'components/RemindersApp';

class App extends Component<null, null> {
    render() {
        return (
            <Provider store={store}>
                <RemindersApp />
            </Provider>
        );
    }
}

export default App;