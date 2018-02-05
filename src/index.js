import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import RegisterForm from './register-form';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <RegisterForm />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
