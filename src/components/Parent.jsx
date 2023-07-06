import React from 'react';
import Child from './Child';

const Parent = ({ message }) => {
  const clickHandler = () => {
    console.log("parent: i'm from parent components");
  };
  return (
    <>
      <h1>{message}</h1>
      <Child message={message} clickHandler={clickHandler} />
    </>
  );
};

export default Parent;