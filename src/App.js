import { useState } from 'react';
import './App.css';
import ChildInput from './components/ChildInput';
import Parent from './components/Parent';

const App = ()=> {
  const [inputVal, setInputVal] = useState("");
  return (
    <div>
      <h1>{inputVal}</h1>
      <Parent message={'hello guys'} />
      <ChildInput setInputVal={setInputVal} />
    </div>
  );
}

export default App;
