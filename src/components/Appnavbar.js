import React, { Component } from 'react';
import Apprenticeshipsmanagers from './Apprenticeshipsmanagers'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Topbanner from './Topbanner';
import styled from 'styled-components';


// Component containing the Apprenticeship page

export default function Apprenticeships() {

    return (
      
      <div>
        <Topbanner title="Apprenticeships" ></Topbanner>
      <div className="bottom-nav">
        <div>
    <Appnavbarcont>
    <a href="#"><Link to={'/apprenticeships/apprenticeshipsmanagers'} >Apprenticeships for Managers</Link></a>
    <a href="#"><Link to={'/apprenticeships/newapprentices'} >New Apprentices</Link></a>
    </Appnavbarcont>
    </div>
    </div>


   </div>
   
      
    );
  }

  const Appnavbarcont = styled.div`
display: flex;
justify-content: space-around;
height: 50px;
    margin: 10px 20px;;
    background: rgb(0, 94, 184);
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;

    a{
      text-decoration: none;

    }
    a{
        color: white;
        font-size: 20px;
        font-family: arial;
        @media only screen and (max-width: 600px) {
          font-size: 12px;
        }

`;
