import React, { Component } from 'react';
import styled from 'styled-components';


export default function Sidenav() {

    return (
        <SideNavCont>
          <h2>Sidenav</h2>
          </SideNavCont>
    );
  }

  const SideNavCont = styled.div`
  idsplay: block;
  float: left;
  width: 30%;
  height: 100vh;
  background-color: grey;
`;



  