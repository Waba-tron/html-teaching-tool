import { Route, Switch, Redirect, Router } from "react-router-dom";
import NavBar from "./components/Nav/Navbar.component";
import HomePage from "./Screens/HomePage";
import SigninScreen from "./Screens/SignInPage/Signin-screen";
import SignUpScreen from "./Screens/SignUpPage/SignUp-screen.jsx";
import AdminScreen from "./Screens/AdminPage/Admin-screen.jsx";
import ProfileScreen from "./Screens/ProfilePage/Profile-screen.jsx";
import QuizScreen from "./Screens/QuizPage/Quiz-screen.jsx";
import VideoScreen from "./Screens/VideoPage/Video-screen.jsx";
import { useSelector } from "react-redux";

//render={() => currentUser ? (<AdminPage />) : (<Redirect to='/' />)}

function App() {
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/Signin"
          render={() => (userInfo ? <Redirect to="/" /> : <SigninScreen />)}
        />

        <Route
          path="/Signup"
          render={() => (userInfo ? <Redirect to="/" /> : <SignUpScreen />)}
        />
        <Route exact path="/admin" component={AdminScreen} />
        <Route
          path="/profile"
          render={() => (userInfo ? <ProfileScreen /> : <Redirect to="/" />)}
        />
        <Route path="/quiz/:id" component={QuizScreen} />
        <Route path="/videos/:topic" component={VideoScreen} />
      </Switch>
    </div>
  );
}

export default App;
