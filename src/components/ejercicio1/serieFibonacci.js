function Ejercicio2({serie, limite}) {
  const msj = limite === 1 ? (
   `Este es el primer numero de la serie Fibonacci`
  ) : (
    `Estos son los primeros ${limite} numeros de la serie Fibonacci`
  )

  return (
    <div>
      <h4>{msj}</h4>
      {serie.join(', ')}
    </div>
  );
}
    
export default Ejercicio2;