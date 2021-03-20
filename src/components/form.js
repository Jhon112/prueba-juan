import { useState } from 'react';

function Form({funcionEjercicio, setMostrarResultado}) {
  const [limite, setLimite] = useState(0);
  const [error, setError] = useState('')
  const [btnDesactivado, desactivarBtn] = useState(true)


  const validarInput = event => {
    let input = event.target.value;
    setMostrarResultado(false)

    if (input < 1 || noNumero(input)) {
      desactivarBtn(true)
      setError('Solo se aceptan numeros, y tiene que ser mayor o igual a 1.')
    } else {
      desactivarBtn(false)
      setError('')
      setLimite(parseInt(input))
    } 
  }

  const noNumero = input => {
    const patron = /[0-9]/;
    return !patron.test(input);
  }

  return (
    <form  onSubmit={(event) => funcionEjercicio(event, limite)}>
      <div>
        <input type="text" placeholder="Limite de numeros" onChange={validarInput} name="limite"></input>
        <span style={{color: "red"}}>{error}</span>
      </div>
      <button type="submit" className="btn btn-primary" disabled={btnDesactivado}>Enviar</button>
    </form>
  );
}
  
export default Form;