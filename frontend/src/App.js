import { Route, Switch } from 'react-router-dom';
import NavBar from './components/Nav/Navbar.component';
import HomePage from './Screens/HomePage';
import SigninScreen from './Screens/SignInPage/Signin-screen';

function App() {
  return (
    <div>
      <NavBar/> 
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/Signin" component={SigninScreen}/>
      </Switch>
    </div>

  );
}

export default App;
