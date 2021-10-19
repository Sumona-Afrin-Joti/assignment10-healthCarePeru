import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Contacts from './Components/Contacts/Contacts';
import ExploreServices from './Components/ExploreServices/ExploreServices';
import Home from './Components/Home/Home';
import MakeAppoinment from './Components/MakeAppoinment/MakeAppoinment';
import AuthProvider from './Components/Context/AuthProvider';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import LearnMore from './Components/LearnMore/LearnMore';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';



function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home" >
              <Home></Home>
            </Route>

            <Route path="/services">
              <ExploreServices></ExploreServices>
            </Route>

            <PrivateRoute path="/contacts">
              <Contacts></Contacts>
            </PrivateRoute>

            <PrivateRoute path="/appoinment">
              <MakeAppoinment></MakeAppoinment>
            </PrivateRoute>

            <Route path="/SignIn">
              <SignIn></SignIn>
            </Route>

            <Route path="/signUp">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/learnMore/:id">
              <LearnMore></LearnMore>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
