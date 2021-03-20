import { useState } from 'react';
import Form from './form';

function Ejercicio2() {
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [resultados, setResultados] = useState([]);

  const empezarSecuencia = (event, limite) => {
    event.preventDefault();
    let numerosFiltrados = [];
    for (let numero = 1; numero <= limite; numero++) {
      agregarValor(numero, numerosFiltrados);
    } 
    setResultados([...numerosFiltrados]);
    setMostrarResultado(true);
  }

  function agregarValor(numero, numerosFiltrados){
    if (numero % 3 === 0 && numero % 5 === 0) {
      numerosFiltrados.push('AKELAB');
    } else if (numero % 5 === 0) {
      numerosFiltrados.push('LAB');
    } else if (numero % 3 === 0) {
      numerosFiltrados.push('AKE');
    } else {
      numerosFiltrados.push(numero);
    }
  }
 
  return (
    <div>
      <h1>AKELAB</h1>
      <p>
        Al presionar el botón en pantalla se deben mostrar
        los números en secuencia hasta el valor introducido, se deben reemplazar los
        número múltiplos de 3 por la palabra AKE y los números múltiplos de 5 por la palabra
        LAB. Si el número es múltiplo de 3 y de 5 se deben mostrar ambas palabras AKELAB.
        <br/>
        Ejemplo: Si la caja de texto tiene el número 20, al presionar el botón se debería mostrar
        en pantalla (1, 2, AKE, 4, LAB, AKE, 7, 8, AKE, LAB, 11, AKE, 13, 14, AKELAB, 16,
        17, AKE, 19, LAB)
      </p>
      <Form funcionEjercicio={empezarSecuencia} setMostrarResultado={setMostrarResultado} />

      { mostrarResultado && (
        <div>
          <h4>Resultados</h4>
          {resultados.join(', ') }
        </div>
        )
      }
    </div>
  );
}
  
export default Ejercicio2;