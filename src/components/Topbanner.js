import React, { Component } from 'react';
import styled from 'styled-components';


export default function Topbanner(props) {

    return (
        <TopBannerCont>
          <p className='title'>{props.title}</p>
          <img src={props.src} alt="OD logo" />
          </TopBannerCont>
    );
  }

  const TopBannerCont = styled.div`
    
    background-color: black;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3% 2% 0% 2%;
    border-radius: 7px;;
    border-radius: 7px;

    img{
        height: 100px;
        margin-left: 30px;

    } 
 
    p{
        color: white;
        font-size: 50px;
        font-weight: bold;
        margin-left: 3%;
    }

   
`;



  