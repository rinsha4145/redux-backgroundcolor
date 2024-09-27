// src/components/ColorChanger.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeToRed, changeToYellow } from './Slice';

const ColorChanger = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(changeToRed('red'))}>
        Change to Red
      </button>
      <button onClick={() => dispatch(changeToYellow())}>
        Change to Yellow
      </button>
    </div>
  );
};

export default ColorChanger;
