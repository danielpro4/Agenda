import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'uikit/dist/css/uikit.css';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
