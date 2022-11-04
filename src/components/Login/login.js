import './login.css';
// import { Link, } from "react-router-dom";
import Header from '../Header/header';
import flock from '../Images/signup-img.jpg';





function Signup() {
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
                <h2>Free and User-friendly <br></br> accounting platform </h2>
                
            </div>
            <div>
                <form className='form'>
                    
                    <label  for="email"> Email</label><br></br> 
                    <input placeholder='Enter your email'></input><br></br> 

                    <label for="password"> Password</label><br></br> 
                    <input placeholder='... and choose your password'></input><br></br> 
                    <button>Create free account</button><br></br> 



                </form>
                    <input type="checkbox" name='fashion'></input>


                    <label  className='check' for="vehicle1"> Accept MIMI's terms and data processor agreement* </label><br></br>
                    <div>

                        <div className='login-page'>
                            <div className='login-page-h4'>

                        <h4>Already have an account?</h4>
                            </div>
                            <div className='login-page-button'>

                        <button>Log In</button>
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
  
  export default Signup;