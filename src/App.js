// import Header from "./components/header";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <>
//         <Header />
//         </>
      
//       </header>
//     </div>
//   );
// }

// export default App;

import styled from 'styled-components';

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Statmand from './components/Statmand';
import Apprenticeships from './components/Apprenticeships';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
    <Router>
        <div>
        <HeaderCont>
            <div className="top-nav">
    {/* <img className="title-logo" src="NHS-Logo_1.jpg" alt="NHS Logo" /> */}
    <div className='fake-image'><p>Logo</p></div>
    <h1>Learning and OD</h1>
</div>
<div className="bottom-nav">
    <a href="#"><Link to={'/'} > OD </Link></a>
    <a href="#"><Link to={'/apprenticeships'} >Apprenticeships</Link></a>
    <a href="#"><Link to={'/statmand'} >Statutory and Mandated</Link></a>
    <a href="#"><Link to={'/contact'} >Contact Us</Link></a>
  
</div>
      
        </HeaderCont>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/apprenticeships' element={<Apprenticeships/>} />
              <Route path='/statmand' element={<Statmand/>} />
              <Route path='/contact' element={<Contact/>} />
   </Routes>
          <hr />
        </div>
      </Router>
    );
  }
}

export default App;



const HeaderCont = styled.div`
background: white;
border-bottom: 1px solid rgb(0, 114, 206);
padding-bottom: 15px;

  .title-logo{
    
      height: 50px;
  
  }

  .fake-image{
    height: 50px;
    background-color: rgb(0, 94, 184);
    width: 100px;
  }

  p{
    color: black;
  }

  .top-nav{
    height: 80px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

  .bottom-nav{
    height: 50px;
    margin: 0 20px;;
    background: rgb(0, 94, 184);
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;
}


h1{
    color: rgb(0, 94, 184);
    font-weight: 700;
    font-size: 35px;
    font-family: arial;
}

a{
    color: white;
    font-size: 20px;
    font-family: arial;
    text-decoration: none;
}

input{
    border-radius: 5px;
    height: 35px;
}

`;