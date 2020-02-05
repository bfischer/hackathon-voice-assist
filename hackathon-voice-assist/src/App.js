import React from 'react';
import './App.css';
import HeaderImg from './images/Header.PNG'
import FooterImg from './images/Footer.PNG'
import DocumentViewer from './DocumentViewer';

function App() {
  return (
      <div>
        <div className="sticky-header">
          <img src={HeaderImg} alt="Header" width="100%" />
        </div>
        <div className="document-body">
          <DocumentViewer />
        </div>
        <div className="sticky-footer">
          <img src={FooterImg} alt="Footer" width="100%" />
        </div>
      </div>
  );
}

export default App;
