// index.js <> code
//******************************************************************************

// <editor-fold> Component Import
import React from 'react';
import ReactDOM from 'react-dom';
import Template from './components/template.js';
import './css/index.css';
// </editor-fold>

// <editor-fold> React Main Render
ReactDOM.render(<React.StrictMode>
  <Template/>
</React.StrictMode>, document.getElementById('root'));
// </editor-fold>
