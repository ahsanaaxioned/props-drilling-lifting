import React from 'react';
import GrandChild from './GrandChild';

const Child = ({ message, clickHandler }) => {
  return (
    <>
      <h1>{message}</h1>
      <GrandChild message={message} />
      <button onClick={clickHandler}>click on me</button>
    </>
  );
};

export default Child;
