import { Link } from "react-router-dom";

function Home() {
  return (
    <ul>
      <li>
        <Link to="/ejercicio1">Ejercicio 1</Link>
      </li>
      <li>
        <Link to="/ejercicio2">Ejercicio 2</Link>
      </li>
      <li>
        <Link to="/ejercicio3">Ejercicio 3</Link>
      </li>
    </ul>
  );
}
  
export default Home;