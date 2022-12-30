import React, { Component } from 'react';
import Topbanner from './Topbanner';
import Odlogo from '../images/Odlogo.png'


export default function Home() {
  // Component containing the Apprenticeship page

    return (
      <>
      <Topbanner email="for information and questions please email: dgft.odcultureandlearning@nhs.net"  img={Odlogo}  >

      </Topbanner>
    
        </>
    );
  }