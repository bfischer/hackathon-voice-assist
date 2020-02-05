import React from 'react';
import './App.css';
import { Layout } from '@olive/react'
import HeaderImg from './images/Header.PNG'
import FooterImg from './images/Footer.PNG'

function App() {
  return (
    <Layout>
      <Layout.Header>
        <img src={HeaderImg} alt="Header" width="100%"/>
      </Layout.Header>
      <Layout.Body>
      Body
      </Layout.Body>
      <Layout.Footer>
        <img src={FooterImg} alt="Footer" width="100%"/>
      </Layout.Footer>
    </Layout>
  );
}

export default App;
