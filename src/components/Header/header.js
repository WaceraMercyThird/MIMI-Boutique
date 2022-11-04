// import logo from './logo.svg';
import './header.css';
import { Link, } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";

function Header() {
  return (
    <div className="navigation">
     

       <div className='nav'>
                <div className='logo'>
                <h1>MIMI</h1>
                <h6 className='brand'>Boutique</h6>

                </div>
                <div className='nav-links'>
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="/aboutus">About Us</Link>
                <Link className='nav-link' to="/signup">Sign Up</Link>  

                </div>
              
          

            
                
            

                
              
               
            </div>
                

    
    </div>
  );
}

export default Header;
