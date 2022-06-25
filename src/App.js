import './App.css';
import Boton from './componentes/Boton';
import fccLogo from './imagenes/logo-ffc.png';

function App() {

  const manejarClic = () => {
    console.log('Clic');
  };

  const reiniciarContador = () => {
    console.log('Reiniciar');
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-contenedor'
        src={fccLogo}
        alt='logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <Boton
          texto={'Clic'}
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton
          texto={'Reiniciar'}
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
