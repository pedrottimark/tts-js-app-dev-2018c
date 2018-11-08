import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

const authorid = '42165'; // Alexander McCall Smith

ReactDOM.render(<App authorid={authorid} />, document.getElementById('root'));
