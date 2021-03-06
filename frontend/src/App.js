import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import {useState,useEffect} from 'react';
import { UserContext } from './UserContext';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import Home from './components/Home';
import Stats from './components/Stats';


function App() {

  const [user, setUser] = useState(null)

  

console.log(user)
  return (

    <Router>
    <div className="App">
    <UserContext.Provider value={{user,setUser}}>
     <Switch>
     <Route exact path='/'>{user?<Home />:<Login />}</Route>
       <Route path='/login'>{user?<Home />:<Login />}</Route>
       <Route path='/signup'>{user?<Home />:<Signup />}</Route>
       <Route path='/stats'>{user?<Stats />:<Login />}</Route>
      
     </Switch>
     </UserContext.Provider>
    </div>
    </Router>
  );
}

export default App;
