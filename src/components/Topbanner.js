import React, { Component } from 'react';
import styled from 'styled-components';


export default function Topbanner(props) {

    return (
        <TopBannerCont>
          <p className='title'>{props.title}</p>
          {/* <img src={props.src} alt="OD logo" /> */}
          </TopBannerCont>
    );
  }

  const TopBannerCont = styled.div`
    
  background: hsla(209, 100%, 36%, 1);

  background: linear-gradient(135deg, hsla(209, 100%, 36%, 1) 0%, hsla(191, 100%, 40%, 1) 100%);
  
  background: -moz-linear-gradient(135deg, hsla(209, 100%, 36%, 1) 0%, hsla(191, 100%, 40%, 1) 100%);
  
  background: -webkit-linear-gradient(135deg, hsla(209, 100%, 36%, 1) 0%, hsla(191, 100%, 40%, 1) 100%);
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1% 2% 0% 2%;
    border-radius: 7px;;
    border-radius: 7px;
    @media only screen and (max-width:400px) {
        height: 5%;
      }
    img{
        height: 100px;
        margin-left: 30px;

    } 
 
    p{
        color: #E8EDEE;
        font-size: 50px;
        font-weight: bold;
        margin-left: 3%;
        @media only screen and (max-width: 700px) {
            font-size: 25px;
          }
    }

   
`;



  