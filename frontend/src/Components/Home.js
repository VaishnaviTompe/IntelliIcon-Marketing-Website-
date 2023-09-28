import React from'react';
// Import CSS styles for the Home component
import './Home.css';

// Import necessary FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';


function Home() {
  return (
    <div className="App">
      <header>
      <div className="header-padding bg-light"></div>

 {/* Navigation bar */}
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div  className="container-fluid">
                 <a className="navbar-brand text-warning text-uppercase me-auto" href="/">Intell<span className='purple'>icon</span></a>

                 <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon "></span>
                 </button>

                 <div className="collapse navbar-collapse" id="navbarSupportedContent">

                 <ul class="navbar-nav mx-auto">
                 <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Home
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/">Action</a>
        </div>
      </li>
                 <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Case Studies
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/">Action</a>
        </div>
      </li>
                 <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Pages
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/">Action</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shop
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/">Action</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Blog
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/">Action</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Blocks
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/">Action</a>
        </div>
      </li>
    </ul>

    <a href="/" className='icon1'><button className='rounded-circle bg-primary'><FontAwesomeIcon style={{ fontSize: '25px', color: 'white' }} icon={faMoon}/></button> </a>
    
    <a href="/" className='icon1'><FontAwesomeIcon className=" text-light " style={{fontSize:'25'}}  icon={faSearch} /></a> 

    <a href="/" className='icon1'><FontAwesomeIcon className=" text-light"  style={{fontSize:'25'}}  icon={faCartShopping} /></a> 
          
    <a href="/Login" className="custom btn btn-primary ms-auto">Sign in</a>
           
     </div>
     
             </div>
           </nav>

       </header>


 {/* Banner section */}
			<div class="rs-banner banner-style10">
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fill-opacity="1" d="M0,64L48,106.7C96,149,192,235,288,266.7C384,299,480,277,576,229.3C672,181,768,107,864,117.3C960,128,1056,224,1152,234.7C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
        <div class="bnr-wrap-overlay">
        </div>

				<div class=" custom12">
					<div class="content-wrap text-light">
						<h1 class="title wow fadeInLeft text-light mb-4">Your Vision <br></br>Our Passion.</h1>
						<div class="description wow fadeInLeft2  text-light mb-4">
							<p>Machine learning algorithms build a model based on sample data, known <br></br> as training data, in order to make predictions or decisions...
							</p>
						</div>

           <button type="button" className='btn btn-primary'>Get Started</button>
            &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
           <a href="/" ><button type="button" className='btn btn-primary rounded-circle'><FontAwesomeIcon icon={faPlay} className="custom-play-button" /></button></a>&nbsp; &nbsp;Watch Intro Videos
					</div>
				</div>
			</div>






    </div>
  );
}

export default Home;
