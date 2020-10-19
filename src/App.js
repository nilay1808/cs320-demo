import React from 'react';
import { Container, Navbar, Image } from 'react-bootstrap';

import './styles/App.css';
import catImg from './assets/cat.jpg';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hello 320</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <div
          style={{
            marginTop: '3em',
          }}
        >
          <Image style={{ maxWidth: '100%' }} src={catImg} />
        </div>
      </Container>
    </div>
  );
}

export default App;
