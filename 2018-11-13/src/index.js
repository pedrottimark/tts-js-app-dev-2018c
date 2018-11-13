import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

const authorid = '68695'; // Nassim Nicholas Taleb

ReactDOM.render(<App authorid={authorid} />, document.getElementById('root'));
