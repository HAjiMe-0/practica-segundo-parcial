import './App.css';
import Boton from './components/Boton';
import { useState } from 'react';


function App() {
  const [show, setShow] = useState(true);
  const mostrar = () => {
    setShow(!show);
  }

  return (
    <section className="App">
      <div className="contenedor-principal">
        <div className='Boton'>
          <Boton texto="Mostrar/Ocultar" funcionClick={mostrar} />
        </div>
        <span className='texto'> 
                 <p className={show ? "visible" : "oculto"}>Welcome To React Challenges</p>
        </span>
      </div>
    </section>
  );

}
export default App;