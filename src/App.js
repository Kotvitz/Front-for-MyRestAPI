import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import FolderApp from './component/FolderApp';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <FolderApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
