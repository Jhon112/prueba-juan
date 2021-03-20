import { useState } from 'react';
import SerieFibonacci from './serieFibonacci';
import Form from '../form';

function Ejercicio1() {
  const [mostrarSerie, setMostrarSerie] = useState(false);
  const [serie, setSerie] = useState([]);

  const empezarFibonacci = (event, limite) => {
    event.preventDefault()
    setMostrarSerie(true)
    if (limite === 1) {
      setSerie([1])
    } else {
      calcularSerie(limite)
    }
  }

  function calcularSerie(limite){
    let serieFibo = [1, 1];

    for(let i=2; i < limite; i++){
      serieFibo.push(serieFibo[i-1] + serieFibo[i-2]);
    }

    setSerie(serieFibo)
  }
 
  return (
    <div>
      <h1>Serie Fibonacci</h1>
      <p>
        En el input de texto se debe ingresar un número entero igual o mayor a 1 que representa la cantidad
        de números que deseamos mostrar de la serie y al presionar el botón se deben
        mostrar en pantalla.
        <br/>
        Ejemplo: Si la caja de texto tiene el número 6, al presionar el botón se deberían mostrar
        los números (1, 1, 2, 3, 5, 8).
      </p>
      <Form funcionEjercicio={empezarFibonacci} setMostrarResultado={setMostrarSerie} />

      { mostrarSerie && <SerieFibonacci serie={serie} limite={serie.length} /> }
    </div>
  );
}
  
export default Ejercicio1;