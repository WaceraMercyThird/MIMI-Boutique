
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signup from "./components/Signup/signup";

import Home from "./components/Home/home";
import Fashion from "./components/Fashion/collection";
import Login from "./components/Signup/login";

import "./App.css";




const App=()=>{

    return (
      <div>
        
             
        <BrowserRouter>
       
          <Switch>
          <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/collection">
              <Fashion/>
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            
         
           
          
          

          </Switch>
       
        </BrowserRouter>
      </div>
    );
 
}

export default App;















