import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Login from './components/login/Login';
import Signup from './components/login/Signup';

function App() {
  return (

    <Router>
    <div className="App">
     <Switch>
     <Route exact path='/'><Login /></Route>
       <Route path='/login'><Login /></Route>
       <Route path='/signup'><Signup /></Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
