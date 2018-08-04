import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routing from './Routes';
import {Provider} from 'react-redux';
import {store} from './store/index';

ReactDOM.render(<Provider store={store}><Routing /></Provider>, document.getElementById('root'));
registerServiceWorker();
