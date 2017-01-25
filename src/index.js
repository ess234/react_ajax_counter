import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components'

//store 생성 후 랜더링
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from './reducers';

const store = createStore(counterReducer);

const rootElement = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
                  <App/>
                </Provider>, rootElement);
