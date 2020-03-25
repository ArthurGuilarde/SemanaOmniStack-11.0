import React, { useState } from 'react';
import Logon from './pages/Logon';

function App() {
  const [counter, setConter] = useState(0);
  function increment() {
    setConter(counter + 1);
  }

  return (
    // <Header title="Teste title"/>
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={increment}> Incrementar </button>
    </div>
  );
}

export default App;
