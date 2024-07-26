import { useState, useCallback, useMemo } from 'react';
import './App.css';
import { ChildArea } from './ChildArea';

export const App = () => {
  console.log('App');
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setIsOpen(!isOpen);
  const onClickClose = useCallback(() => setIsOpen(false), [setIsOpen]);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <>
      <div className="App">
        <input placeholder="input" onChange={onChangeText}></input>
        <br />
        <br />
      </div>
      <button onClick={onClickOpen}>表示</button>
      <ChildArea isOpen={isOpen} onClickClose={onClickClose} />
    </>
  );
};
