import './collection.css';
import { Link, } from "react-router-dom";
import Header from '../Header/header';
import cloth from '../Images/cloth1.png';
import style from '../Images/cloth2.png';
import flock from '../Images/cloth3.png';
import dress from '../Images/cloth2.png';
import design from '../Images/cloth3.png';
import collaction from '../Images/cloth2.png';



// import Card from "../Home/cards";
// import Footer from './Footer';


function Fashion() {
    return (
      <div className="collection-body">
        <div className='nav-bar'>

        <Header/>
        </div>
        <div className='home-section'>
          
        
        </div> 
        <div className='section'>
          <div className='all-collactions'>

          <div className=' box-row'>
            <div className='box'>

           
            <img src={cloth} alt="Market" width="100%"/> 

        
            <div>
              <div className='price'>
                <h1>Ksh 2000/=</h1>

              </div>
              <div className='buy-collection'>
                
              <Link className='collection-btn'>
              <button>Buy</button>
            </Link>
            

              </div>
            </div>
            </div>
            <div className='box'>

            <img src={style} alt="Market" width="100%"/>
            <div>
  <div className='price'>
    <h1>Ksh 1500/=</h1>

  </div>
  <div className='buy-collection'>
    
  <Link className='collection-btn'>
  <button>Buy</button>
</Link>


  </div>
</div>
</div>
<div className='box'>

<img src={design} alt="Market" width="100%"/><div>
  <div className='price'>
    <h1>Ksh 3020/=</h1>

  </div>
  <div className='buy-collection'>
    
  <Link className='collection-btn'>
  <button>Buy</button>
</Link>


  </div>
</div>
</div>

<div className='box'>

<img src={dress} alt="Market" width="100%"/><div>
  <div className='price'>
    <h1>Ksh 2800/=</h1>

  </div>
  <div className='buy-collection'>
    
  <Link className='collection-btn'>
  <button>Buy</button>
</Link>


  </div>
</div>
</div>




          </div>



          <div className=' box-row'>
            <div className='box'>

            <img src={flock} alt="Market" width="100%"/>
            <div>
              <div className='price'>
                <h1>Ksh 1900/=</h1>

              </div>
              <div className='buy-collection'>
                
              <Link className='collection-btn'>
              <button>Buy</button>
            </Link>
            

              </div>
            </div>
            </div>
            <div className='box'>

            <img src={cloth} alt="Market" width="100%"/><div>
  <div className='price'>
    <h1>Ksh 3000/=</h1>

  </div>
  <div className='buy-collection'>
    
  <Link className='collection-btn'>
  <button>Buy</button>
</Link>


  </div>
</div>
</div>
<div className='box'>

<img src={collaction} alt="Market" width="100%"/>
<div>
  <div className='price'>
    <h1>Ksh 8000/=</h1>

  </div>
  <div className='buy-collection'>
    
  <Link className='collection-btn'>
  <button>Buy</button>
</Link>


  </div>
</div>
</div>

<div className='box'>

<img src={flock} alt="Market" width="100%"/><div>
  <div className='price'>
    <h1>Ksh 5000/=</h1>

  </div>
  <div className='buy-collection'>
    
  <Link className='collection-btn'>
  <button>Buy</button>
</Link>


  </div>
</div>
</div>




          </div>


          </div>



          
        
         
       <div>

       
        </div> 
        </div>
        

          
  
      
      </div>
    );
  }
  
  export default Fashion;