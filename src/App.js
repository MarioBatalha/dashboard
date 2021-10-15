import './App.css';
import Home  from './pages/Home';
import UserList from './pages/UserList';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Product from './pages/Product';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Landing /> 
          </Route>
          <Route path="/Home">
            <Home /> 
          </Route>
          <Route path="/Users">
            <UserList /> 
          </Route>
          <Route path="/Login">
            <Login /> 
          </Route>
          <Route path="/Sign-up">
            <Signup /> 
          </Route>
          <Route path="/Product">
            <Product /> 
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
