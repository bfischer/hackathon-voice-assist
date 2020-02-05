import React from 'react';
import logo from './logo.svg';
import './App.css';
import DocumentViewer from './DocumentViewer';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Header/>
      <DocumentViewer />
      <Footer/>
    </>
  );
}

export default App;
