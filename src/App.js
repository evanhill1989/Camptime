import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import CamptimeLogo from './app/assets/img/Camptime_Logo.png';
// import otherLogo from './app/assets/img/logo.png';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Navbar dark color='primary' sticky='top' expand='md'>
                <Container>
                    <NavbarBrand href='/'>
                        <img src={CamptimeLogo} alt='nucamp logo' />
                    </NavbarBrand>
                </Container>
            </Navbar>
      
        </div>
    );
}

export default App;
