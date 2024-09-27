// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import ColorChanger from './ColorChange';

const App = () => {
  const backgroundColor = useSelector((state) => state.col.color);

  return (
    <div style={{ backgroundColor, height: '100vh', padding: '20px' }}>
      <h1>Click buttons to change background color</h1>
      <ColorChanger />
    </div>
  );
};

export default App;
