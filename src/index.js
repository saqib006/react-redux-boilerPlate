import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routing from './Routes';
import {Provider} from 'react-redux';
import {store} from './store/index';

ReactDOM.render(<Provider store={store}><MuiThemeProvider><Routing /></MuiThemeProvider></Provider>, document.getElementById('root'));
registerServiceWorker();
