import React from 'react';
import ReactDOM from 'react-dom';

import reducer from './reduce'
import {createStore, compose} from 'redux'
import {Provider} from 'react-redux'
import './index.css';
import App from './components/App';


const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
    <Provider store={store}>


                <App/>


    </Provider>,
    document.getElementById('root'));
