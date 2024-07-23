import { useState } from 'react';
import './App.css';

export const App = () => {
  console.log('App');
  const [count, setCount] = useState(0);
  const onClickCountUp = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Vite + React</h1>
      <p>{count}</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
    </>
  );
};
