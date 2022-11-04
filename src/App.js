
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signup from "./components/Login/login";

import Home from "./components/Home/home";
import Fashion from "./components/Fashion/collection";

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
            
         
           
          
          

          </Switch>
       
        </BrowserRouter>
      </div>
    );
 
}

export default App;















