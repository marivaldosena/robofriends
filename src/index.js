import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import tachyons from 'tachyons'


window.tachyons = tachyons

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
