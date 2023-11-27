
import './App.css';

import './Components/Register.css';
import Navbar from './Components/Navbar';
import Home from './Components/home/Home.js';
import Login from './Components/Login';
import Contact from './Components/Contact';
import About from './Components/About';
import Register from './Components/Register';
import MyInfo from './Components/MyInfo';
import userInfoUpdate from './Components/Portfolio/Updateform/userInfoUpdate';
import Updateeducation from './Components/Portfolio/Updateform/Updateeducation';

import updateExperience from './Components/Portfolio/Updateform/UpdateExperience';
import Profile from './Components/Profile/UserProfile.js';
import DeleteExperience from './Components/Portfolio/DeleteContent/DeleteExperience.js';
import DeleteEducationdata from './Components/Portfolio/DeleteContent/DeleteEducation.js';
import Logout from './Components/Logout.js';
import { BrowserRouter as Router ,Route , Switch } from "react-router-dom";
import NotFound  from './Components/NotFound';
import { createContext, useReducer } from 'react';
//import { useContext } from 'react';
import { initialState, reducer } from './reducer/usereducer';

export const UserContext = createContext();
const Routing = () => {
  return (
    <>
            <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route  exact path="/MyInfo"component={MyInfo} />
        <Route  exact path="/signin" component={Login} />
        <Route path="/signup" component={Register} />
          <Route path="/getuser/:id" component={userInfoUpdate} />
          <Route path="/updateeducation/:id" component={Updateeducation} />
          <Route path="/updateExperience/:id" component={updateExperience} />
          <Route path="/DeleteExperience/:id" component={DeleteExperience} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/DeleteEducationdata/:id" component={DeleteEducationdata} />
          <Route path="/logout" component={Logout} />
          
        <Route  component={NotFound} />
        </Switch>
    </>
  )
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Router>
        <UserContext.Provider value={{state,dispatch}}>
        <Navbar />
        <Routing/>
        </UserContext.Provider>
    </Router>
    </>
  );
}

export default App;

//rafce()