
// Imports all needed pages and library

import './App.css';
import React from 'react';
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';

// import components
import Login from './Components/Login'
import Page from './Components/Page'
import Card from './Components/Card'
import Home from './Components/Home'


// Routes of all rendering components
function App() {
  return (

    <div>
    <Router>
      <Routes>
      <Route exact path = "/" element = {<Home/>}></Route> 
         <Route exact path = "/Login" element = {<Login/>}></Route>
         <Route exact path = "/Page" element = {<Page/>}></Route> 
         <Route exact path = "/Card" element = {<Card/>}></Route>
      </Routes>
    </Router>



  </div>









    

  );

}
// Exporing default app on port 3000
export default App;
