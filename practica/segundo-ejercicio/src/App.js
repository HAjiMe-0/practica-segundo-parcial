
import './App.css';
import Boton from './components/Boton';
import { useState } from 'react';

function App() {
  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    window.myTimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(window.myTimer);
  };
  const resetTimer = () => {
    clearInterval(window.myTimer);
    setTimer(0);
  };


  return (
    <div className="App">
      <div className='timer'>
        <h1>Timer</h1>
        <span>{Math.trunc(timer / 60)} mins </span>
        <span>{timer % 60} secs</span>
      </div>
      <div className='botones'>
        <Boton className="iniciar" texto={"Iniciar"} funcionClick={startTimer}/>
        <Boton className="parar" texto={"Parar"} funcionClick={stopTimer}/>
        <Boton className="reiniciar" texto={"Reiniciar"} funcionClick={resetTimer}/>
      </div>
    </div>
  );
}

export default App;