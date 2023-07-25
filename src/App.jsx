import { useState } from 'react';
import './App.css'
import Button from './components/Button'
import Heading from './components/Heading'

function App() {
  const [x, setX] = useState(0);

  function handleInc() {
    setX((prevX) => prevX + 1);
  }

  function handleDec() {
    setX((prevX) => prevX - 1);
  }

  return (
    <>
      <Heading x={x} />
      <Button onClick={handleInc} content="INCREMENT" />
      <Button onClick={handleDec} content="DECREMENT" />
    </>
  );
}

export default App;
