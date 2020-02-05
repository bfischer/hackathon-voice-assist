import React from 'react';
import './App.css';
import { Layout, Olive } from '@olive/react'
import HeaderImg from './images/Header.PNG'
import FooterImg from './images/Footer.PNG'
import DocumentViewer from './DocumentViewer';

function App() {
  return (
    <Olive>
      <Layout>
        <Layout.Header>
          <img src={HeaderImg} alt="Header" width="100%"/>
        </Layout.Header>
        <Layout.Body>
          <DocumentViewer/>
        </Layout.Body>
        <Layout.Footer>
          <img src={FooterImg} alt="Footer" width="100%"/>
        </Layout.Footer>
      </Layout>
    </Olive>
  );
}

export default App;
