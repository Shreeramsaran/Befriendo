import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import { Router } from "@mui/icons-material";
function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/login" element={ <Login/>}></Route>
        <Route path="/register" element={ <Register/>}></Route>
        <Route path="/profile/:id" element={ <Profile/>}></Route>
      </Routes>
    </Router>
    
        
     
  );
}

export default App;
