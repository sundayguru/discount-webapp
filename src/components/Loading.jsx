import React from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';


const Container = styled.div`
  text-align: center;
`;


const Loading = () => (
    <Container>
        <img src={logo} className="App-logo" />
        <p style={{fontSize: 14}}>Loading</p>
    </Container>
);

export default Loading;
