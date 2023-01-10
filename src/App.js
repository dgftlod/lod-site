import styled from 'styled-components';

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Statmand from './components/Statmand';
import Apprenticeships from './components/Apprenticeships';
import Contact from './components/Contact';
import Workexperience from './components/Workexperience';
import NHSlogo from "./images/The-Dudley-Group-NHS-Foundation-Trust-RGB-BLUE.png"
import LODlogo from "./images/LOD.png"
import Apprenticeshipsmanagers from './components/Apprenticeshipsmanagers';
import Newapprentices from './components/Newapprentices';


class App extends Component {
  render() {
    return (
    <Router>
        <div>
        <HeaderCont>
            <div className="top-nav">
            {/* <h1>Learning and OD</h1> */}
            <img className="lod-logo" src={LODlogo} alt="Learning & OD Logo Logo" />
            <img className="title-logo" src={NHSlogo} alt="NHS Logo" />
    {/* <div className='fake-image'><p>Logo</p></div> */}

</div>


<div className="bottom-nav">
    <a href="#"><Link to={'/'} >OD</Link></a>
    <a href="#"><Link to={'/apprenticeships'} >Apprenticeships</Link></a>
    <a href="#"><Link to={'/workexperience'} >Work Experience</Link></a>
    <a href="#"><Link to={'/statmand'} >Statutory and Mandated</Link></a>
    <a href="#"><Link to={'/contact'} >Contact Us</Link></a>
  
</div>
      
        </HeaderCont>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/apprenticeships' element={<Apprenticeships/>} />
                <Route path='/apprenticeships/apprenticeshipsmanagers' element={<Apprenticeshipsmanagers />} />
                <Route path='/apprenticeships/newapprentices' element={<Newapprentices />} />
              <Route path='/workexperience' element={<Workexperience/>} />
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
padding-bottom: 10px;

  .title-logo{
    
      height: 120px;
      padding-top: 20px;
  
  }
  .lod-logo{
    height: 100px;
  }


  p{
    color: black;
  }

  .top-nav{
    height: 80px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

  .bottom-nav{
    height: 50px;
    margin: 0 20px;;
    background: rgb(0, 94, 184);
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;

    a{
      text-decoration: none;

    }
    a:hover{
      color: grey;
    }
}




h1{
    color: rgb(0, 94, 184);
    font-weight: 700;
    font-size: 35px;
    font-family: arial;
    @media only screen and (max-width: 600px) {
      font-size: 20px;
    }
}

a{
    color: white;
    font-size: 20px;
    font-family: arial;
    text-decoration: underline;
    @media only screen and (max-width: 600px) {
      font-size: 12px;
    }
}

input{
    border-radius: 5px;
    height: 35px;
}

`;