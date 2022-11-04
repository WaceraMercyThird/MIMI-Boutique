import './home.css';
import { Link, } from "react-router-dom";
import Header from '../Header/header';
import flock from '../Images/home-img.png'





function Home() {
    return (
      <div className="body">
        <div className='nav-bar'>

        <Header/>
        </div>
        <div className='home-section'>
          
        
        </div> 
        <div className='section'>
          <div className='context-header'>

          <h3>Collection <br></br>Spring Dresses <br></br> 2023</h3>

            <p>Express your unique style. Don't miss out on the simple and elegant  outfit for 2023</p>
            <div >
            <Link className='context-btn'to="/collection">
              <button type='button'>Buy Now</button>
            </Link>
            </div>
         
          </div>
          <div className='context-img'>
          <img src={flock} alt="Market"/> 
          </div>
         
        
        </div>
        

          
  
      
      </div>
    );
  }
  
  export default Home;