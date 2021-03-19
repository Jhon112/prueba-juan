import { useState } from 'react';
import SerieFibonacci from './serieFibonacci';

function Ejercicio1() {
  const [limite, setLimite] = useState(0);
  const [mostrarSerie, setMostrarSerie] = useState(false);
  const [serie, setSerie] = useState([]);
  const [error, setError] = useState('')
  const [btnDesactivado, desactivarBtn] = useState(true)

  const empezarFibonacci = event => {
    event.preventDefault()
    setMostrarSerie(true)
    calcularSerie(limite)
  }

  function calcularSerie(limite){
    if (limite === 1) {
      setSerie([1])
    } else {
      let serieFibo = [1, 1];

      for(let i=2; i < limite; i++){
        serieFibo.push(serieFibo[i-1] + serieFibo[i-2]);
      }
  
      setSerie(serieFibo)
    }    
  }

  const validarInput = event => {
    let input = event.target.value;

    setMostrarSerie(false)
    if (input < 1 || noNumero(input)) {
      desactivarBtn(true)
      setError('Solo se aceptan numeros, y tiene que ser mayor a 1.')
    } else {
      desactivarBtn(false)
      setError('')
      setLimite(parseInt(input))
    } 
  }

  const noNumero = input => {
    const patron = /[A-Za-z]/;
    return patron.test(input);
  }
 
  return (
    <div>
      <h1>Serie Fibonacci</h1>
      <form  onSubmit={empezarFibonacci}>
        <div>
            <input type="text" placeholder="Limite de numeros" onChange={validarInput} name="limite"></input>
            <span style={{color: "red"}}>{error}</span>
        </div>
        <button type="submit" className="btn btn-primary" disabled={btnDesactivado}>Enviar</button>
      </form>

      { mostrarSerie && <SerieFibonacci serie={serie} limite={limite} /> }
    </div>
  );
}
  
export default Ejercicio1;