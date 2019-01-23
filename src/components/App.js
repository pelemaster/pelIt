import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'
import ErrorCatcher from './ErrorCatcher'
import Router from './apps/Router'

class App extends React.Component {
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

        return (
            <Provider store={store}>
                <ErrorCatcher>
                    <Router />
                </ErrorCatcher>
            </Provider>
        )
    }
}

export default App