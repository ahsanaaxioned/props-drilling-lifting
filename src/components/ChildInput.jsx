import React, { useState } from "react";

const ChildInput = ({setInputVal})=> {
    const inputHandle = (e) => {
        setInputVal(e.target.value);
      };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Please enter here"
          onChange={inputHandle}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
export default ChildInput;
