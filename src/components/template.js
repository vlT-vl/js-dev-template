// template.js <> code
//******************************************************************************

// <editor-fold> React Import
import React from 'react';
// </editor-fold>

// <editor-fold> Import del modulo
import reactlogo from '../res/react.png';
import vltlogo from '../res/vlt.svg';
import '../css/template.css';
import '../css/animate.css';
// </editor-fold>

// <editor-fold> React component render
const Template = () => {
  return (<div className="Template">
    <header className="Template-header">
      <img src={reactlogo} className="ReactLogo anim -fadeIn" alt="logo"/>
      <div className="anim -slideInUp">
        <p>
          React Web Application Template
        </p>
        <div className="Version">Versione: 0.0.1</div>
        <div className="Build">Build: R001-04062022</div>
        <img src={vltlogo} className="vlTlogo" alt="logo"/>
        <div className="Copyright">Veronesi Lorenzo © 2022 vlT - vl.TECH</div>
      </div>
    </header>
  </div>)
}
//</editor-fold>

export default Template;
