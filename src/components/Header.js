import { Navbar , NavbarBrand } from 'reactstrap';
import CamptimeLogo from '../app/assets/img/Camptime_Logo.png';

const Header = () => {
    return (
        <Navbar dark color='dark'>
            <div className='container'>
                <NavbarBrand href='/'>
                    <img src={CamptimeLogo} alt='Camptime Logo' width='40' height='40' />
                </NavbarBrand>
            </div>
        </Navbar>
    )
}

export default Header;