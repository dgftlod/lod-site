import React, { Component } from 'react';
import styled from 'styled-components';

// Component containing the banner across the top of each page

export default function Topbanner(props) {

    return (
        <TopBannerCont>
          <h2 className='title'>{props.title}</h2>
          <p className='email'>{props.email}</p>
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1% 2% 0% 2%;
    border-radius: 7px;;
    border-radius: 7px;
    @media only screen and (max-width:400px) {
        height: 5%;
      }
    } 
 
    h2{
        color: #E8EDEE;
        font-size: 50px;
        font-weight: bold;
        @media only screen and (max-width: 850px) {
            font-size: 25px;
          }
        }
    p{
      margin-top: -20px;
      color: #E8EDEE;
      font-size: 25px;
      font-weight: bold;
      @media only screen and (max-width: 850px) {
          font-size: 12px;
        }
    }
    

    }

   
`;



  