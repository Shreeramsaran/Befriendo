import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile"
import {BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom';
import { useContext } from "react";
//import { Router } from "@mui/icons-material";
function App() {

  const {user} = useContext(AuthContext)
  return (
   <Router>
   <Switch>
      <Routes>
        <Route exact path="/" >{user?<Home/>:<Register/>}</Route>
        <Route path="/login"> {user?<Redirect to="/"/>:<Login/>}</Route>
        <Route path="/register"> {user?<Redirect to="/"/>:<Register/>}</Route>
        <Route path="/profile/:username"> <Profile/></Route>
      </Routes>
      </Switch>
    </Router>
    
        
     
  );
}

export default App;
