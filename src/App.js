import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Ejercicio1 from './components/ejercicio1/ejercicio1';
import Ejercicio2 from "./components/ejercicio2";
import Ejercicio3 from "./components/ejercicio3";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/ejercicio1" component={Ejercicio1}/>
          <Route path="/ejercicio2" component={Ejercicio2}/>
          <Route path="/ejercicio3" component={Ejercicio3}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
