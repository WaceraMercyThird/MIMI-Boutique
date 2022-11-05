import "./login.css";
import Header from '../Header/header';
import flock from '../Images/signup-img.jpg';
import { Link } from 'react-router-dom';





function Login() {
    return (
      <div className=" signup-body">
        <div className='nav-bar'>

        <Header/>
        </div>
        <div className='home-section'>
          
        
        </div> 
        <div className='whole-signup'>

        <div className='submain'>
            <div className='signup-header'>
                <h2>Continue using our fashion <br></br> platform </h2>
                
            </div>
            <div>
                <form className='forms'>
                    
                    <label  for="email"> Email</label><br></br> 
                    <input placeholder='Enter your email'></input><br></br> 

                    <label for="password"> Password</label><br></br> 
                    <input placeholder='... and choose your password'></input><br></br> 
                    <Link to="/cart">
                    
                    <button>Create free account</button><br></br> 
                    </Link>



                </form>
                    <input type="checkbox" name='fashion'></input>


                    <label  className='check' for="vehicle1"> Accept MIMI's terms and data processor agreement* </label><br></br>
                    <div>

                        <div className='signup-page'>
                            <div className='signup-page-h4'>

                        <h4>Don't have an account?</h4>
                            </div>
                            <div className='signup-page-button'>
                                <Link to="/signup">
                                
                        <button>Sign Up</button>
                                </Link>

                            </div>

                        </div>
                    </div>


            </div>
         
         
        
        </div>
        <div className='submain2'>

          <img src={flock} alt="Market"/> 
        </div>
        </div>

        

          
  
      
      </div>
    );
  }
  
  export default Login;